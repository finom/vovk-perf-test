import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgf")
export default class LgfController {
  @operation({
    summary: "Get Lgf",
  })
  @get()
  static getLgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgf",
  })
  @post("{id}")
  static createLgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
