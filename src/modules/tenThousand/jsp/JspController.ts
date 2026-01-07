import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
