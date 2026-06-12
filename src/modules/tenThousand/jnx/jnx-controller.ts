import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnx")
export default class JnxController {
  @operation({
    summary: "Get Jnx",
  })
  @get()
  static getJnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnx",
  })
  @post("{id}")
  static createJnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
