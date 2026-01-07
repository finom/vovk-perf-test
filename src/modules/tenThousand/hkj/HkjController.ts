import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkj")
export default class HkjController {
  @operation({
    summary: "Get Hkj",
  })
  @get()
  static getHkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkj",
  })
  @post("{id}")
  static createHkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
