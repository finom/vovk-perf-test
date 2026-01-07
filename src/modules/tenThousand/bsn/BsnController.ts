import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsn")
export default class BsnController {
  @operation({
    summary: "Get Bsn",
  })
  @get()
  static getBsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsn",
  })
  @post("{id}")
  static createBsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
