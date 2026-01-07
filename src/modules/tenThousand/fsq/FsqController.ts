import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsq")
export default class FsqController {
  @operation({
    summary: "Get Fsq",
  })
  @get()
  static getFsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsq",
  })
  @post("{id}")
  static createFsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
