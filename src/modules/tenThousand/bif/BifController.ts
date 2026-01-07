import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bif")
export default class BifController {
  @operation({
    summary: "Get Bif",
  })
  @get()
  static getBif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bif",
  })
  @post("{id}")
  static createBif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
