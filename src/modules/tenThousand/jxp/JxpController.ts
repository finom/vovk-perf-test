import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxp")
export default class JxpController {
  @operation({
    summary: "Get Jxp",
  })
  @get()
  static getJxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxp",
  })
  @post("{id}")
  static createJxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
