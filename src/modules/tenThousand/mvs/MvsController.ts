import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvs")
export default class MvsController {
  @operation({
    summary: "Get Mvs",
  })
  @get()
  static getMvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvs",
  })
  @post("{id}")
  static createMvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
