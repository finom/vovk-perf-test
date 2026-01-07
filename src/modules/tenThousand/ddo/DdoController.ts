import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddo")
export default class DdoController {
  @operation({
    summary: "Get Ddo",
  })
  @get()
  static getDdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddo",
  })
  @post("{id}")
  static createDdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
