import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alg")
export default class AlgController {
  @operation({
    summary: "Get Alg",
  })
  @get()
  static getAlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alg",
  })
  @post("{id}")
  static createAlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
