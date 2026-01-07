import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lji")
export default class LjiController {
  @operation({
    summary: "Get Lji",
  })
  @get()
  static getLji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lji",
  })
  @post("{id}")
  static createLji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
