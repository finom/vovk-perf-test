import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgo")
export default class CgoController {
  @operation({
    summary: "Get Cgo",
  })
  @get()
  static getCgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgo",
  })
  @post("{id}")
  static createCgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
