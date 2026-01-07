import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcm")
export default class HcmController {
  @operation({
    summary: "Get Hcm",
  })
  @get()
  static getHcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcm",
  })
  @post("{id}")
  static createHcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
