import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsn")
export default class FsnController {
  @operation({
    summary: "Get Fsn",
  })
  @get()
  static getFsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsn",
  })
  @post("{id}")
  static createFsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
