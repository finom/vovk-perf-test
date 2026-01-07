import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhm")
export default class LhmController {
  @operation({
    summary: "Get Lhm",
  })
  @get()
  static getLhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhm",
  })
  @post("{id}")
  static createLhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
