import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkx")
export default class HkxController {
  @operation({
    summary: "Get Hkx",
  })
  @get()
  static getHkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkx",
  })
  @post("{id}")
  static createHkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
