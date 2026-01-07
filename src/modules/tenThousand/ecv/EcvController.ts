import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecv")
export default class EcvController {
  @operation({
    summary: "Get Ecv",
  })
  @get()
  static getEcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecv",
  })
  @post("{id}")
  static createEcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
