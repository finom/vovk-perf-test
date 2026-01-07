import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkm")
export default class DkmController {
  @operation({
    summary: "Get Dkm",
  })
  @get()
  static getDkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkm",
  })
  @post("{id}")
  static createDkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
