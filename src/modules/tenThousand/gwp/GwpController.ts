import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwp")
export default class GwpController {
  @operation({
    summary: "Get Gwp",
  })
  @get()
  static getGwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwp",
  })
  @post("{id}")
  static createGwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
