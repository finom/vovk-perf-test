import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krv")
export default class KrvController {
  @operation({
    summary: "Get Krv",
  })
  @get()
  static getKrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krv",
  })
  @post("{id}")
  static createKrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
