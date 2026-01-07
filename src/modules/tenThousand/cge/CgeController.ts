import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cge")
export default class CgeController {
  @operation({
    summary: "Get Cge",
  })
  @get()
  static getCge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cge",
  })
  @post("{id}")
  static createCge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
