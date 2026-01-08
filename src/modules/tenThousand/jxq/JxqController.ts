import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxq")
export default class JxqController {
  @operation({
    summary: "Get Jxq",
  })
  @get()
  static getJxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxq",
  })
  @post("{id}")
  static createJxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
