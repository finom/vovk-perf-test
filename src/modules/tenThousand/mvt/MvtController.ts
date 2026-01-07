import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvt")
export default class MvtController {
  @operation({
    summary: "Get Mvt",
  })
  @get()
  static getMvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvt",
  })
  @post("{id}")
  static createMvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
