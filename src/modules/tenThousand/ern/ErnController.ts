import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ern")
export default class ErnController {
  @operation({
    summary: "Get Ern",
  })
  @get()
  static getErn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ern",
  })
  @post("{id}")
  static createErn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
