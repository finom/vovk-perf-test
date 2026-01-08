import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnw")
export default class JnwController {
  @operation({
    summary: "Get Jnw",
  })
  @get()
  static getJnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnw",
  })
  @post("{id}")
  static createJnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
