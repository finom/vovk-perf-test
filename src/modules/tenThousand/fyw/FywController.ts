import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyw")
export default class FywController {
  @operation({
    summary: "Get Fyw",
  })
  @get()
  static getFyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyw",
  })
  @post("{id}")
  static createFyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
