import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsz")
export default class FszController {
  @operation({
    summary: "Get Fsz",
  })
  @get()
  static getFsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsz",
  })
  @post("{id}")
  static createFsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
