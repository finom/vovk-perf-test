import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkq")
export default class HkqController {
  @operation({
    summary: "Get Hkq",
  })
  @get()
  static getHkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkq",
  })
  @post("{id}")
  static createHkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
