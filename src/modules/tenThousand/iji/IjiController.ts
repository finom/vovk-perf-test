import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iji")
export default class IjiController {
  @operation({
    summary: "Get Iji",
  })
  @get()
  static getIji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iji",
  })
  @post("{id}")
  static createIji = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
