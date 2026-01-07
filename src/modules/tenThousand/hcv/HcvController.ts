import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcv")
export default class HcvController {
  @operation({
    summary: "Get Hcv",
  })
  @get()
  static getHcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcv",
  })
  @post("{id}")
  static createHcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
