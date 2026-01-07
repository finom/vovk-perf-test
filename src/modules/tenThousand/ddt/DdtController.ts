import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddt")
export default class DdtController {
  @operation({
    summary: "Get Ddt",
  })
  @get()
  static getDdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddt",
  })
  @post("{id}")
  static createDdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
