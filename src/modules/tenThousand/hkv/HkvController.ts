import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkv")
export default class HkvController {
  @operation({
    summary: "Get Hkv",
  })
  @get()
  static getHkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkv",
  })
  @post("{id}")
  static createHkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
