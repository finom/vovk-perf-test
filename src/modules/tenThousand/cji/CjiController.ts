import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cji")
export default class CjiController {
  @operation({
    summary: "Get Cji",
  })
  @get()
  static getCji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cji",
  })
  @post("{id}")
  static createCji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
