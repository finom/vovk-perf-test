import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffi")
export default class FfiController {
  @operation({
    summary: "Get Ffi",
  })
  @get()
  static getFfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffi",
  })
  @post("{id}")
  static createFfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
