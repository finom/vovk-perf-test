import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsj")
export default class JsjController {
  @operation({
    summary: "Get Jsj",
  })
  @get()
  static getJsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsj",
  })
  @post("{id}")
  static createJsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
