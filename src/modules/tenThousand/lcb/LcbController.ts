import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcb")
export default class LcbController {
  @operation({
    summary: "Get Lcb",
  })
  @get()
  static getLcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcb",
  })
  @post("{id}")
  static createLcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
