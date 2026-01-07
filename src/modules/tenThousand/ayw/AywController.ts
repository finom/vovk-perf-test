import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayw")
export default class AywController {
  @operation({
    summary: "Get Ayw",
  })
  @get()
  static getAyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayw",
  })
  @post("{id}")
  static createAyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
