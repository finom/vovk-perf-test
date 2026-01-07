import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csn")
export default class CsnController {
  @operation({
    summary: "Get Csn",
  })
  @get()
  static getCsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csn",
  })
  @post("{id}")
  static createCsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
