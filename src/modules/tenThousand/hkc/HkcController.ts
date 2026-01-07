import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkc")
export default class HkcController {
  @operation({
    summary: "Get Hkc",
  })
  @get()
  static getHkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkc",
  })
  @post("{id}")
  static createHkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
