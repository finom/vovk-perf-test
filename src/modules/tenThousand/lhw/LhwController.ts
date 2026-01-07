import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhw")
export default class LhwController {
  @operation({
    summary: "Get Lhw",
  })
  @get()
  static getLhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhw",
  })
  @post("{id}")
  static createLhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
