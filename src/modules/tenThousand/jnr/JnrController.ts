import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnr")
export default class JnrController {
  @operation({
    summary: "Get Jnr",
  })
  @get()
  static getJnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnr",
  })
  @post("{id}")
  static createJnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
