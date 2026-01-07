import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwi")
export default class CwiController {
  @operation({
    summary: "Get Cwi",
  })
  @get()
  static getCwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwi",
  })
  @post("{id}")
  static createCwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
