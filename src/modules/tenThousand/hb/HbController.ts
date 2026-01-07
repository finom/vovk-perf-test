import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hb")
export default class HbController {
  @operation({
    summary: "Get Hb",
  })
  @get()
  static getHb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hb",
  })
  @post("{id}")
  static createHb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
