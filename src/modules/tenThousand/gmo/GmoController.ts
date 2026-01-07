import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmo")
export default class GmoController {
  @operation({
    summary: "Get Gmo",
  })
  @get()
  static getGmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gmo",
  })
  @post("{id}")
  static createGmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
