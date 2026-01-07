import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eim")
export default class EimController {
  @operation({
    summary: "Get Eim",
  })
  @get()
  static getEim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eim",
  })
  @post("{id}")
  static createEim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
