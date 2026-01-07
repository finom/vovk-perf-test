import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmp")
export default class KmpController {
  @operation({
    summary: "Get Kmp",
  })
  @get()
  static getKmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmp",
  })
  @post("{id}")
  static createKmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
