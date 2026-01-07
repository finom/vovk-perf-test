import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njg")
export default class NjgController {
  @operation({
    summary: "Get Njg",
  })
  @get()
  static getNjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njg",
  })
  @post("{id}")
  static createNjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
