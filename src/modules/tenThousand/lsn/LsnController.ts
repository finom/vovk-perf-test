import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsn")
export default class LsnController {
  @operation({
    summary: "Get Lsn",
  })
  @get()
  static getLsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsn",
  })
  @post("{id}")
  static createLsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
