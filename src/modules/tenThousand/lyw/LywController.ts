import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyw")
export default class LywController {
  @operation({
    summary: "Get Lyw",
  })
  @get()
  static getLyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyw",
  })
  @post("{id}")
  static createLyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
