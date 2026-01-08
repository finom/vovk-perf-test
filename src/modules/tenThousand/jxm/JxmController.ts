import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxm")
export default class JxmController {
  @operation({
    summary: "Get Jxm",
  })
  @get()
  static getJxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxm",
  })
  @post("{id}")
  static createJxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
