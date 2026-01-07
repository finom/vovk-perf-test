import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkw")
export default class HkwController {
  @operation({
    summary: "Get Hkw",
  })
  @get()
  static getHkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkw",
  })
  @post("{id}")
  static createHkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
