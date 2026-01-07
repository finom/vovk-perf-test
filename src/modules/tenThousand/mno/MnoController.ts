import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mno")
export default class MnoController {
  @operation({
    summary: "Get Mno",
  })
  @get()
  static getMno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mno",
  })
  @post("{id}")
  static createMno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
