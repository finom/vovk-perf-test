import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kim")
export default class KimController {
  @operation({
    summary: "Get Kim",
  })
  @get()
  static getKim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kim",
  })
  @post("{id}")
  static createKim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
