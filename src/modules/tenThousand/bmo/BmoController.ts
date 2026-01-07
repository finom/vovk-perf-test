import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmo")
export default class BmoController {
  @operation({
    summary: "Get Bmo",
  })
  @get()
  static getBmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmo",
  })
  @post("{id}")
  static createBmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
