import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhb")
export default class LhbController {
  @operation({
    summary: "Get Lhb",
  })
  @get()
  static getLhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhb",
  })
  @post("{id}")
  static createLhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
