import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcc")
export default class HccController {
  @operation({
    summary: "Get Hcc",
  })
  @get()
  static getHcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcc",
  })
  @post("{id}")
  static createHcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
