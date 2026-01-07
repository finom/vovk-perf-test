import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpi")
export default class CpiController {
  @operation({
    summary: "Get Cpi",
  })
  @get()
  static getCpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpi",
  })
  @post("{id}")
  static createCpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
