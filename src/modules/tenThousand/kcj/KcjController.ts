import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcj")
export default class KcjController {
  @operation({
    summary: "Get Kcj",
  })
  @get()
  static getKcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcj",
  })
  @post("{id}")
  static createKcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
