import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffe")
export default class FfeController {
  @operation({
    summary: "Get Ffe",
  })
  @get()
  static getFfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffe",
  })
  @post("{id}")
  static createFfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
