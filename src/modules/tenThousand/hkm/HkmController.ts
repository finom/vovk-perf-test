import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkm")
export default class HkmController {
  @operation({
    summary: "Get Hkm",
  })
  @get()
  static getHkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkm",
  })
  @post("{id}")
  static createHkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
