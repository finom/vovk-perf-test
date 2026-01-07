import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyl")
export default class LylController {
  @operation({
    summary: "Get Lyl",
  })
  @get()
  static getLyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyl",
  })
  @post("{id}")
  static createLyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
