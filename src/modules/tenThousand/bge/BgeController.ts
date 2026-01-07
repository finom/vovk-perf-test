import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bge")
export default class BgeController {
  @operation({
    summary: "Get Bge",
  })
  @get()
  static getBge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bge",
  })
  @post("{id}")
  static createBge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
