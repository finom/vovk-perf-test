import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmc")
export default class DmcController {
  @operation({
    summary: "Get Dmc",
  })
  @get()
  static getDmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmc",
  })
  @post("{id}")
  static createDmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
