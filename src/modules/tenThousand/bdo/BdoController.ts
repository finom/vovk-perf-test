import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdo")
export default class BdoController {
  @operation({
    summary: "Get Bdo",
  })
  @get()
  static getBdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdo",
  })
  @post("{id}")
  static createBdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
