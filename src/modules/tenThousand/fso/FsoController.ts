import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fso")
export default class FsoController {
  @operation({
    summary: "Get Fso",
  })
  @get()
  static getFso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fso",
  })
  @post("{id}")
  static createFso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
