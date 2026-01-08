import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkx")
export default class JkxController {
  @operation({
    summary: "Get Jkx",
  })
  @get()
  static getJkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkx",
  })
  @post("{id}")
  static createJkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
