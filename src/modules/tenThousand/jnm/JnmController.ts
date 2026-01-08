import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnm")
export default class JnmController {
  @operation({
    summary: "Get Jnm",
  })
  @get()
  static getJnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnm",
  })
  @post("{id}")
  static createJnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
