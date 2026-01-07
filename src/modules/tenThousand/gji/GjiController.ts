import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gji")
export default class GjiController {
  @operation({
    summary: "Get Gji",
  })
  @get()
  static getGji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gji",
  })
  @post("{id}")
  static createGji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
