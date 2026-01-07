import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnb")
export default class FnbController {
  @operation({
    summary: "Get Fnb",
  })
  @get()
  static getFnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnb",
  })
  @post("{id}")
  static createFnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
