import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksn")
export default class KsnController {
  @operation({
    summary: "Get Ksn",
  })
  @get()
  static getKsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksn",
  })
  @post("{id}")
  static createKsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
