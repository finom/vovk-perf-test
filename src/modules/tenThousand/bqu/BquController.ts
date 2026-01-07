import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqu")
export default class BquController {
  @operation({
    summary: "Get Bqu",
  })
  @get()
  static getBqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqu",
  })
  @post("{id}")
  static createBqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
