import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkr")
export default class HkrController {
  @operation({
    summary: "Get Hkr",
  })
  @get()
  static getHkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkr",
  })
  @post("{id}")
  static createHkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
