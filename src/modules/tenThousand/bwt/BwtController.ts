import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwt")
export default class BwtController {
  @operation({
    summary: "Get Bwt",
  })
  @get()
  static getBwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwt",
  })
  @post("{id}")
  static createBwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
