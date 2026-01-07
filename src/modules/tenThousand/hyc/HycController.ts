import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyc")
export default class HycController {
  @operation({
    summary: "Get Hyc",
  })
  @get()
  static getHyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyc",
  })
  @post("{id}")
  static createHyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
