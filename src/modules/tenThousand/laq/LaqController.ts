import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laq")
export default class LaqController {
  @operation({
    summary: "Get Laq",
  })
  @get()
  static getLaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laq",
  })
  @post("{id}")
  static createLaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
