import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ak")
export default class AkController {
  @operation({
    summary: "Get Ak",
  })
  @get()
  static getAk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ak",
  })
  @post("{id}")
  static createAk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
