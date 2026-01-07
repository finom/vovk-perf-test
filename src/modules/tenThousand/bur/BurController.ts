import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bur")
export default class BurController {
  @operation({
    summary: "Get Bur",
  })
  @get()
  static getBur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bur",
  })
  @post("{id}")
  static createBur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
