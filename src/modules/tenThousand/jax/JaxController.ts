import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jax")
export default class JaxController {
  @operation({
    summary: "Get Jax",
  })
  @get()
  static getJax = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jax",
  })
  @post("{id}")
  static createJax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
