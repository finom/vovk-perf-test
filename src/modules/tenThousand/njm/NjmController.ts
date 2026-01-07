import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njm")
export default class NjmController {
  @operation({
    summary: "Get Njm",
  })
  @get()
  static getNjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njm",
  })
  @post("{id}")
  static createNjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
