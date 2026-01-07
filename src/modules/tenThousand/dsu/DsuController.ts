import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsu")
export default class DsuController {
  @operation({
    summary: "Get Dsu",
  })
  @get()
  static getDsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsu",
  })
  @post("{id}")
  static createDsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
