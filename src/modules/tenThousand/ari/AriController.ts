import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ari")
export default class AriController {
  @operation({
    summary: "Get Ari",
  })
  @get()
  static getAri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ari",
  })
  @post("{id}")
  static createAri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
