import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmo")
export default class LmoController {
  @operation({
    summary: "Get Lmo",
  })
  @get()
  static getLmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmo",
  })
  @post("{id}")
  static createLmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
