import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adg")
export default class AdgController {
  @operation({
    summary: "Get Adg",
  })
  @get()
  static getAdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adg",
  })
  @post("{id}")
  static createAdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
