import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
