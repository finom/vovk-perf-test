import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wn")
export default class WnController {
  @operation({
    summary: "Get Wn",
  })
  @get()
  static getWn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wn",
  })
  @post("{id}")
  static createWn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
