import { createFileRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import shop from "/assets/shop.png"

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
      <div className='location'>
        <h2>Visit us in our shop!</h2>
        <img className='shop' src={shop} alt='shop' />
        <p>Location: 412 Pine Street, Capitol Hill, Seattle, WA 98101.</p>
      </div>

      

      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form>
          <h2>Or send us an email</h2>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <textarea placeholder='Message' name='message'></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
