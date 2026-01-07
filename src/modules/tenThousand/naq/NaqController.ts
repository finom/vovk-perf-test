import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naq")
export default class NaqController {
  @operation({
    summary: "Get Naq",
  })
  @get()
  static getNaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naq",
  })
  @post("{id}")
  static createNaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
