import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxw")
export default class JxwController {
  @operation({
    summary: "Get Jxw",
  })
  @get()
  static getJxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxw",
  })
  @post("{id}")
  static createJxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
