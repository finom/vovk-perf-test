import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biy")
export default class BiyController {
  @operation({
    summary: "Get Biy",
  })
  @get()
  static getBiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biy",
  })
  @post("{id}")
  static createBiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
