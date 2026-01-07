import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mji")
export default class MjiController {
  @operation({
    summary: "Get Mji",
  })
  @get()
  static getMji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mji",
  })
  @post("{id}")
  static createMji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
