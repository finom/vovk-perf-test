import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnb")
export default class JnbController {
  @operation({
    summary: "Get Jnb",
  })
  @get()
  static getJnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnb",
  })
  @post("{id}")
  static createJnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
