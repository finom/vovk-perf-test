import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("css")
export default class CssController {
  @operation({
    summary: "Get Css",
  })
  @get()
  static getCss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Css",
  })
  @post("{id}")
  static createCss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
