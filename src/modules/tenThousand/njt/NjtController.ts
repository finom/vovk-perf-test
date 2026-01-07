import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njt")
export default class NjtController {
  @operation({
    summary: "Get Njt",
  })
  @get()
  static getNjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njt",
  })
  @post("{id}")
  static createNjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
