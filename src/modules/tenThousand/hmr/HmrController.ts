import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmr")
export default class HmrController {
  @operation({
    summary: "Get Hmr",
  })
  @get()
  static getHmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmr",
  })
  @post("{id}")
  static createHmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
