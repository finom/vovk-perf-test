import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kov")
export default class KovController {
  @operation({
    summary: "Get Kov",
  })
  @get()
  static getKov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kov",
  })
  @post("{id}")
  static createKov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
