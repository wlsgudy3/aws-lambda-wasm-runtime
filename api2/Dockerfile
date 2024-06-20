FROM public.ecr.aws/lambda/nodejs:14

# Change directory to /var/task
WORKDIR /var/task

RUN yum update -y && yum install -y curl tar gzip

# Bundle and pre-compile the wasm files
COPY *.exe ./

# Bundle the JS bootstrap server
COPY *.js ./

CMD [ "hello.handler" ]
