import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jk")
export default class JkController {
  @operation({
    summary: "Get Jk",
  })
  @get()
  static getJk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jk",
  })
  @post("{id}")
  static createJk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
