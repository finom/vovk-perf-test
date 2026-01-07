import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdt")
export default class KdtController {
  @operation({
    summary: "Get Kdt",
  })
  @get()
  static getKdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdt",
  })
  @post("{id}")
  static createKdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
