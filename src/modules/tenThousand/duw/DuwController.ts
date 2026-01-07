import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duw")
export default class DuwController {
  @operation({
    summary: "Get Duw",
  })
  @get()
  static getDuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duw",
  })
  @post("{id}")
  static createDuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
