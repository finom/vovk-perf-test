import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njl")
export default class NjlController {
  @operation({
    summary: "Get Njl",
  })
  @get()
  static getNjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njl",
  })
  @post("{id}")
  static createNjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
