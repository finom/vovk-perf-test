import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtn")
export default class JtnController {
  @operation({
    summary: "Get Jtn",
  })
  @get()
  static getJtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtn",
  })
  @post("{id}")
  static createJtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
