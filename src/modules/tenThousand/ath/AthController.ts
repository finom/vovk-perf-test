import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ath")
export default class AthController {
  @operation({
    summary: "Get Ath",
  })
  @get()
  static getAth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ath",
  })
  @post("{id}")
  static createAth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
