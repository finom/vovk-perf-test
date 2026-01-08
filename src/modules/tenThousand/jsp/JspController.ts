import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsp")
export default class JspController {
  @operation({
    summary: "Get Jsp",
  })
  @get()
  static getJsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsp",
  })
  @post("{id}")
  static createJsp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
