import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hji")
export default class HjiController {
  @operation({
    summary: "Get Hji",
  })
  @get()
  static getHji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hji",
  })
  @post("{id}")
  static createHji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
