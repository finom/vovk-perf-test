import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdc")
export default class KdcController {
  @operation({
    summary: "Get Kdc",
  })
  @get()
  static getKdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdc",
  })
  @post("{id}")
  static createKdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
