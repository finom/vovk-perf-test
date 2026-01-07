import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhi")
export default class DhiController {
  @operation({
    summary: "Get Dhi",
  })
  @get()
  static getDhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhi",
  })
  @post("{id}")
  static createDhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
