import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lly")
export default class LlyController {
  @operation({
    summary: "Get Lly",
  })
  @get()
  static getLly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lly",
  })
  @post("{id}")
  static createLly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
