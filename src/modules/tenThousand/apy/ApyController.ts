import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apy")
export default class ApyController {
  @operation({
    summary: "Get Apy",
  })
  @get()
  static getApy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apy",
  })
  @post("{id}")
  static createApy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
