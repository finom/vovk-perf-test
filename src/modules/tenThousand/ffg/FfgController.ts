import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffg")
export default class FfgController {
  @operation({
    summary: "Get Ffg",
  })
  @get()
  static getFfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffg",
  })
  @post("{id}")
  static createFfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
