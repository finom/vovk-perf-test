import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyn")
export default class DynController {
  @operation({
    summary: "Get Dyn",
  })
  @get()
  static getDyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyn",
  })
  @post("{id}")
  static createDyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
