import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnk")
export default class JnkController {
  @operation({
    summary: "Get Jnk",
  })
  @get()
  static getJnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnk",
  })
  @post("{id}")
  static createJnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
