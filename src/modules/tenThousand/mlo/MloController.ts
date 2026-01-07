import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlo")
export default class MloController {
  @operation({
    summary: "Get Mlo",
  })
  @get()
  static getMlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlo",
  })
  @post("{id}")
  static createMlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
