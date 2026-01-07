import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyu")
export default class LyuController {
  @operation({
    summary: "Get Lyu",
  })
  @get()
  static getLyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyu",
  })
  @post("{id}")
  static createLyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
