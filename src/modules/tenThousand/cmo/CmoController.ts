import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmo")
export default class CmoController {
  @operation({
    summary: "Get Cmo",
  })
  @get()
  static getCmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cmo",
  })
  @post("{id}")
  static createCmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
