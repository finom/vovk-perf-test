import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hni")
export default class HniController {
  @operation({
    summary: "Get Hni",
  })
  @get()
  static getHni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hni",
  })
  @post("{id}")
  static createHni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
