import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkb")
export default class HkbController {
  @operation({
    summary: "Get Hkb",
  })
  @get()
  static getHkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkb",
  })
  @post("{id}")
  static createHkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
