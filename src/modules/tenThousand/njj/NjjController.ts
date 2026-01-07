import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njj")
export default class NjjController {
  @operation({
    summary: "Get Njj",
  })
  @get()
  static getNjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njj",
  })
  @post("{id}")
  static createNjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
