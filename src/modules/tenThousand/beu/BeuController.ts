import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beu")
export default class BeuController {
  @operation({
    summary: "Get Beu",
  })
  @get()
  static getBeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beu",
  })
  @post("{id}")
  static createBeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
