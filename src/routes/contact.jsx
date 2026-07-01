import { createFileRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

function Contact() {
  const mutation = useMutation({
    mutationKey: ['contact'],
    mutationFn: function (formData) {
      return postContact(formData.get('name'), formData.get('email'), formData.get('message'));
    },
  });

  if (mutation.isError) {
    return <h1>Error found!</h1>;
  }

  return (
    <div className='contact'>
      <h2>Contact Us</h2>

      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <textarea placeholder='Message' name='message'></textarea>
           <button>Submit</button>
        </form>
      )}
    </div>
  );
}
