import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nai")
export default class NaiController {
  @operation({
    summary: "Get Nai",
  })
  @get()
  static getNai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nai",
  })
  @post("{id}")
  static createNai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
