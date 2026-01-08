import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkd")
export default class JkdController {
  @operation({
    summary: "Get Jkd",
  })
  @get()
  static getJkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkd",
  })
  @post("{id}")
  static createJkd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
