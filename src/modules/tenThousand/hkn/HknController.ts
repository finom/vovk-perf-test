import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkn")
export default class HknController {
  @operation({
    summary: "Get Hkn",
  })
  @get()
  static getHkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkn",
  })
  @post("{id}")
  static createHkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
