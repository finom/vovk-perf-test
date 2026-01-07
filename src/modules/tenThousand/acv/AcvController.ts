import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acv")
export default class AcvController {
  @operation({
    summary: "Get Acv",
  })
  @get()
  static getAcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acv",
  })
  @post("{id}")
  static createAcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
