import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bor")
export default class BorController {
  @operation({
    summary: "Get Bor",
  })
  @get()
  static getBor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bor",
  })
  @post("{id}")
  static createBor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
