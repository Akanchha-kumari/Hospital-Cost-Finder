import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  keyframes,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaSave, FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ValidationR from './ValidationR';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounceIn = keyframes`
  0% { transform: scale(0.9); }
  60% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Register = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', age: '', password: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(false); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddAdmin = async () => {
    if (editIndex !== null) {
      const updatedAdmins = [...admins];
      updatedAdmins[editIndex] = form;
      setAdmins(updatedAdmins);
      setEditIndex(null);
    } else {
      try {
        await axios.post('http://localhost:5000/api/admins', form);
        setAdmins([...admins, form]);
        setIsRegistered(true);
        setShowLoginButton(true); 
        setTimeout(() => setIsRegistered(false), 3000); 
      } catch (error) {
        console.error('Error registering admin:', error);
      }
    }
    setForm({ name: '', email: '', age: '', password: '' });
  };

  const handleEdit = (index) => {
    setForm(admins[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setAdmins(admins.filter((_, i) => i !== index));
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        w={['90%', '80%', '60%', '40%']}
        animation={`${fadeIn} 0.8s ease`}
      >
        <Text
          fontSize="2xl"
          mb={4}
          fontWeight="bold"
          textAlign="center"
          animation={`${bounceIn} 0.5s ease`}
        >
          Register New User
        </Text>

        <Stack spacing={4} mb={6} animation={`${fadeIn} 1s ease`}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ boxShadow: '0 0 8px teal' }}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ boxShadow: '0 0 8px teal' }}
            />
          </FormControl>
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input
              name="age"
              type="number"
              value={form.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ boxShadow: '0 0 8px teal' }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ boxShadow: '0 0 8px teal' }}
            />
          </FormControl>

          <Button
            leftIcon={editIndex !== null ? <FaEdit /> : <FaSave />}
            colorScheme="teal"
            onClick={handleAddAdmin}
            animation={`${bounceIn} 0.5s ease`}
          >
            {editIndex !== null ? 'Update User' : 'Add User'}
          </Button>

          {isRegistered && (
            <Alert status="success" variant="subtle">
              <AlertIcon />
              User registered successfully!
            </Alert>
          )}

          {showLoginButton && ( 
            <Stack spacing={4} mt={4}>
              <Button colorScheme="blue" onClick={handleLoginRedirect}>
                Go to Login
              </Button>
            </Stack>
          )}
        </Stack>

        <Box
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          animation={`${fadeIn} 0.8s ease`}
        >
          <Text fontSize="xl" mb={4}>
            User List
          </Text>
          <Table variant="simple">
            <Thead bg="teal.100">
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Age</Th>
                <Th>Password</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {admins.map((admin, index) => (
                <Tr key={index}>
                  <Td>{admin.name}</Td>
                  <Td>{admin.email}</Td>
                  <Td>{admin.age}</Td>
                  <Td>{admin.password}</Td>
                  <Td>
                    <Button
                      leftIcon={<FaEdit />}
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleEdit(index)}
                      mr={2}
                    >
                      Edit
                    </Button>
                    <Button
                      leftIcon={<FaTrash />}
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </div>
  );
};

export default Register;