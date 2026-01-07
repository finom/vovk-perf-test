import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdn")
export default class KdnController {
  @operation({
    summary: "Get Kdn",
  })
  @get()
  static getKdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdn",
  })
  @post("{id}")
  static createKdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
