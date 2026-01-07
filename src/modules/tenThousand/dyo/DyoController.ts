import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyo")
export default class DyoController {
  @operation({
    summary: "Get Dyo",
  })
  @get()
  static getDyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyo",
  })
  @post("{id}")
  static createDyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
