import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnj")
export default class JnjController {
  @operation({
    summary: "Get Jnj",
  })
  @get()
  static getJnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnj",
  })
  @post("{id}")
  static createJnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
