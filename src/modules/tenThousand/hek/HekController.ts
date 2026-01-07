import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hek")
export default class HekController {
  @operation({
    summary: "Get Hek",
  })
  @get()
  static getHek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hek",
  })
  @post("{id}")
  static createHek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
