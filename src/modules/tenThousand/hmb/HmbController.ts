import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmb")
export default class HmbController {
  @operation({
    summary: "Get Hmb",
  })
  @get()
  static getHmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmb",
  })
  @post("{id}")
  static createHmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
