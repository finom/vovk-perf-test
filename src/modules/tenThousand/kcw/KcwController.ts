import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcw")
export default class KcwController {
  @operation({
    summary: "Get Kcw",
  })
  @get()
  static getKcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcw",
  })
  @post("{id}")
  static createKcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
