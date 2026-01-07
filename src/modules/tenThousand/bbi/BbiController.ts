import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbi")
export default class BbiController {
  @operation({
    summary: "Get Bbi",
  })
  @get()
  static getBbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbi",
  })
  @post("{id}")
  static createBbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
