import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adw")
export default class AdwController {
  @operation({
    summary: "Get Adw",
  })
  @get()
  static getAdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adw",
  })
  @post("{id}")
  static createAdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
