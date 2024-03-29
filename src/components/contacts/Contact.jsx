import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export default function Contact() {
	const [email, setMail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();
	const toast = useToast();
	const sendEmail = (e) => {
		e.preventDefault();
		console.log(form.current);
		emailjs
			.sendForm(
				"service_o8w7sjf",
				"template_rorr29m",
				form.current,
				"gc8TqgV1sskxEu9Ak"
			)
			.then(
				(result) => {
					console.log(result.text);
					toast({
						title: "Sent.",
						description: "Thank you for contacting.",
						status: "success",
						duration: 3000,
						isClosable: true,
					});

					setMail("");
					setName("");
					setMessage("");
				},
				(error) => {
					console.log(error.text);
					toast({
						title: "Something Went Wrong.",
						description:
							"Please try again or send an email to gdharaniraj0@gmail.com.",
						status: "error",
						duration: 3000,
						isClosable: true,
					});
				}
			);
	};
	return (
		<section id="contact">
			<Box>
				<Container
					bg="#9DC4FB"
					maxW="full"
					mt={0}
					centerContent
					overflow="hidden"
				>
					<Flex>
						<Box
							bg="#02054B"
							color="white"
							borderRadius="lg"
							m={{ sm: 4, md: 16, lg: 10 }}
							p={{ sm: 5, md: 5, lg: 16 }}
						>
							<Box p={4}>
								<Wrap
									spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
								>
									<WrapItem>
										<Box>
											<Heading mt={{ base: 0, sm: 20 }}>
												Contact
											</Heading>
											<Text
												mt={{ sm: 3, md: 3, lg: 5 }}
												color="gray.500"
											>
												Fill up the form below to
												contact
											</Text>
											<Box
												py={{
													base: 5,
													sm: 5,
													md: 8,
													lg: 10,
												}}
											>
												<VStack
													pl={0}
													spacing={3}
													alignItems="flex-start"
												>
													<Button
														size="md"
														height="48px"
														width="200px"
														variant="ghost"
														color="#DCE2FF"
														_hover={{
															border: "2px solid #1C6FEB",
														}}
														leftIcon={
															<MdPhone
																color="#1970F1"
																size="20px"
															/>
														}
													>
														+91-9381142926
													</Button>
													<Button
														size="md"
														height="48px"
														width="250px"
														variant="ghost"
														color="#DCE2FF"
														_hover={{
															border: "2px solid #1C6FEB",
														}}
														leftIcon={
															<MdEmail
																color="#1970F1"
																size="20px"
															/>
														}
													>
														gdharaniraj0@gmail.com
													</Button>
													<Button
														size="md"
														height="48px"
														width="260px"
														variant="ghost"
														color="#DCE2FF"
														_hover={{
															border: "2px solid #1C6FEB",
														}}
														leftIcon={
															<MdLocationOn
																color="#1970F1"
																size="20px"
															/>
														}
														textAlign="center"
													>
														Vizianagaram, Andhra
														Pradesh
													</Button>
												</VStack>
											</Box>
											<HStack
												mt={{ lg: 10, md: 10 }}
												spacing={5}
												px={5}
												alignItems="flex-start"
											>
												<IconButton
													aria-label="facebook"
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{ bg: "#0D74FF" }}
													icon={
														<RxLinkedinLogo size="28px" />
													}
													as="a"
													target={"_blank"}
													href="https://www.linkedin.com/in/dharani-raj-080856246/"
												/>
												<IconButton
													aria-label="github"
													variant="ghost"
													size="lg"
													isRound={true}
													_hover={{ bg: "#0D74FF" }}
													icon={
														<BsGithub size="28px" />
													}
													as="a"
													target={"_blank"}
													href="https://github.com/G-Dharani-raj"
												/>
											</HStack>
										</Box>
									</WrapItem>
									<WrapItem>
										<Box bg="white" borderRadius="lg">
											<Box m={8} color="#0B0E3F">
												<VStack spacing={5}>
													<FormControl id="name">
														<FormLabel>
															Your Name
														</FormLabel>
														<InputGroup borderColor="#E0E1E7">
															<InputLeftElement
																pointerEvents="none"
																children={
																	<BsPerson color="gray.800" />
																}
															/>
															<Input
																type="text"
																size="md"
																value={name}
																onChange={(e) =>
																	setName(
																		e.target
																			.value
																	)
																}
															/>
														</InputGroup>
													</FormControl>
													<FormControl id="name">
														<FormLabel>
															Mail
														</FormLabel>
														<InputGroup borderColor="#E0E1E7">
															<InputLeftElement
																pointerEvents="none"
																children={
																	<MdOutlineEmail color="gray.800" />
																}
															/>
															<Input
																type="text"
																size="md"
																value={email}
																onChange={(e) =>
																	setMail(
																		e.target
																			.value
																	)
																}
															/>
														</InputGroup>
													</FormControl>
													<FormControl id="name">
														<FormLabel>
															Message
														</FormLabel>
														<Textarea
															borderColor="gray.300"
															_hover={{
																borderRadius:
																	"gray.300",
															}}
															placeholder="message"
															value={message}
															onChange={(e) =>
																setMessage(
																	e.target
																		.value
																)
															}
														/>
													</FormControl>
													<FormControl
														id="name"
														float="right"
													>
														<Button
															variant="solid"
															bg="#0D74FF"
															color="white"
															_hover={{}}
															type="submit"
															onClick={sendEmail}
														>
															Send Message
														</Button>
													</FormControl>
												</VStack>
											</Box>
										</Box>
									</WrapItem>
								</Wrap>
							</Box>
						</Box>
					</Flex>
				</Container>
				<form
					ref={form}
					onSubmit={sendEmail}
					style={{ display: "none" }}
				>
					<label>Name</label>
					<input type="text" name="user_name" value={name} />
					<label>Email</label>
					<input type="email" name="user_email" value={email} />
					<label>Message</label>
					<textarea name="message" value={message} />
					<input type="submit" value="Send" />
				</form>
			</Box>
		</section>
	);
}
