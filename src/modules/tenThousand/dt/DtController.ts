import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dt")
export default class DtController {
  @operation({
    summary: "Get Dt",
  })
  @get()
  static getDt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dt",
  })
  @post("{id}")
  static createDt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
