import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cle")
export default class CleController {
  @operation({
    summary: "Get Cle",
  })
  @get()
  static getCle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cle",
  })
  @post("{id}")
  static createCle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
