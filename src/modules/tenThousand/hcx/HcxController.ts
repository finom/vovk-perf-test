import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcx")
export default class HcxController {
  @operation({
    summary: "Get Hcx",
  })
  @get()
  static getHcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcx",
  })
  @post("{id}")
  static createHcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
