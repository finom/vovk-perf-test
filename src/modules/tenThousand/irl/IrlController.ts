import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irl")
export default class IrlController {
  @operation({
    summary: "Get Irl",
  })
  @get()
  static getIrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irl",
  })
  @post("{id}")
  static createIrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
