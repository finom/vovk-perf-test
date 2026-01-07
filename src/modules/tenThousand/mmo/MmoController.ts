import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmo")
export default class MmoController {
  @operation({
    summary: "Get Mmo",
  })
  @get()
  static getMmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmo",
  })
  @post("{id}")
  static createMmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
