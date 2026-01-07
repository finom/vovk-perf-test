import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkh")
export default class HkhController {
  @operation({
    summary: "Get Hkh",
  })
  @get()
  static getHkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkh",
  })
  @post("{id}")
  static createHkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
