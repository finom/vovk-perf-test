import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ji")
export default class JiController {
  @operation({
    summary: "Get Ji",
  })
  @get()
  static getJi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ji",
  })
  @post("{id}")
  static createJi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
