import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayn")
export default class AynController {
  @operation({
    summary: "Get Ayn",
  })
  @get()
  static getAyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayn",
  })
  @post("{id}")
  static createAyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
