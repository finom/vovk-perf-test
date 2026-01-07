import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhh")
export default class LhhController {
  @operation({
    summary: "Get Lhh",
  })
  @get()
  static getLhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhh",
  })
  @post("{id}")
  static createLhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
