import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgm")
export default class DgmController {
  @operation({
    summary: "Get Dgm",
  })
  @get()
  static getDgm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgm",
  })
  @post("{id}")
  static createDgm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
