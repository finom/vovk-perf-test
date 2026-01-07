import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hce")
export default class HceController {
  @operation({
    summary: "Get Hce",
  })
  @get()
  static getHce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hce",
  })
  @post("{id}")
  static createHce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
