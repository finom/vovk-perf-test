import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njb")
export default class NjbController {
  @operation({
    summary: "Get Njb",
  })
  @get()
  static getNjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njb",
  })
  @post("{id}")
  static createNjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
