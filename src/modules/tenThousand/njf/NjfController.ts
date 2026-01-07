import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njf")
export default class NjfController {
  @operation({
    summary: "Get Njf",
  })
  @get()
  static getNjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njf",
  })
  @post("{id}")
  static createNjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
