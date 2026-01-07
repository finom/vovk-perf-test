import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtx")
export default class MtxController {
  @operation({
    summary: "Get Mtx",
  })
  @get()
  static getMtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtx",
  })
  @post("{id}")
  static createMtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
