import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnq")
export default class JnqController {
  @operation({
    summary: "Get Jnq",
  })
  @get()
  static getJnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnq",
  })
  @post("{id}")
  static createJnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
