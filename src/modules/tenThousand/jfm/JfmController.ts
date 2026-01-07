import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfm")
export default class JfmController {
  @operation({
    summary: "Get Jfm",
  })
  @get()
  static getJfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfm",
  })
  @post("{id}")
  static createJfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
