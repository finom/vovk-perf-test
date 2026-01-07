import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxg")
export default class JxgController {
  @operation({
    summary: "Get Jxg",
  })
  @get()
  static getJxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxg",
  })
  @post("{id}")
  static createJxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
