import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfi")
export default class DfiController {
  @operation({
    summary: "Get Dfi",
  })
  @get()
  static getDfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfi",
  })
  @post("{id}")
  static createDfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
