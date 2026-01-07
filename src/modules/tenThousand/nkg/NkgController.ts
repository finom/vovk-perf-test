import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkg")
export default class NkgController {
  @operation({
    summary: "Get Nkg",
  })
  @get()
  static getNkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkg",
  })
  @post("{id}")
  static createNkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
