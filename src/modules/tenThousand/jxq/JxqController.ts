import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
