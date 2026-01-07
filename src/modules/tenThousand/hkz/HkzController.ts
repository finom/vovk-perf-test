import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkz")
export default class HkzController {
  @operation({
    summary: "Get Hkz",
  })
  @get()
  static getHkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkz",
  })
  @post("{id}")
  static createHkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
