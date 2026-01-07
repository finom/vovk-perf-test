import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mce")
export default class MceController {
  @operation({
    summary: "Get Mce",
  })
  @get()
  static getMce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mce",
  })
  @post("{id}")
  static createMce = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
