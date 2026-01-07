import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcb")
export default class HcbController {
  @operation({
    summary: "Get Hcb",
  })
  @get()
  static getHcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcb",
  })
  @post("{id}")
  static createHcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
