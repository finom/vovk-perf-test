import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbz")
export default class CbzController {
  @operation({
    summary: "Get Cbz",
  })
  @get()
  static getCbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbz",
  })
  @post("{id}")
  static createCbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
