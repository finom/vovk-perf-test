import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnp")
export default class JnpController {
  @operation({
    summary: "Get Jnp",
  })
  @get()
  static getJnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnp",
  })
  @post("{id}")
  static createJnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
