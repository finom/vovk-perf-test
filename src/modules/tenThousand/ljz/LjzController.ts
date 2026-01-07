import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljz")
export default class LjzController {
  @operation({
    summary: "Get Ljz",
  })
  @get()
  static getLjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljz",
  })
  @post("{id}")
  static createLjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
