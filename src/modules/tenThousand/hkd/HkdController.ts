import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkd")
export default class HkdController {
  @operation({
    summary: "Get Hkd",
  })
  @get()
  static getHkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkd",
  })
  @post("{id}")
  static createHkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
