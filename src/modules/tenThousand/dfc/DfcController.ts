import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfc")
export default class DfcController {
  @operation({
    summary: "Get Dfc",
  })
  @get()
  static getDfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfc",
  })
  @post("{id}")
  static createDfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
