import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gge")
export default class GgeController {
  @operation({
    summary: "Get Gge",
  })
  @get()
  static getGge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gge",
  })
  @post("{id}")
  static createGge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
