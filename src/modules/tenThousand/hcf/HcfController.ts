import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcf")
export default class HcfController {
  @operation({
    summary: "Get Hcf",
  })
  @get()
  static getHcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcf",
  })
  @post("{id}")
  static createHcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
