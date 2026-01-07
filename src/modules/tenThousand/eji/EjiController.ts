import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eji")
export default class EjiController {
  @operation({
    summary: "Get Eji",
  })
  @get()
  static getEji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eji",
  })
  @post("{id}")
  static createEji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
