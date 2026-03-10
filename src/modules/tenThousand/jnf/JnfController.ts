import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnf")
export default class JnfController {
  @operation({
    summary: "Get Jnf",
  })
  @get()
  static getJnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jnf",
  })
  @post("{id}")
  static createJnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
