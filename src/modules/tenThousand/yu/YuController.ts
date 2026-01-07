import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yu")
export default class YuController {
  @operation({
    summary: "Get Yu",
  })
  @get()
  static getYu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yu",
  })
  @post("{id}")
  static createYu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
