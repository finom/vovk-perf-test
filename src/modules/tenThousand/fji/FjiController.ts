import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fji")
export default class FjiController {
  @operation({
    summary: "Get Fji",
  })
  @get()
  static getFji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fji",
  })
  @post("{id}")
  static createFji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
