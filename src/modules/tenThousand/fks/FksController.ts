import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fks")
export default class FksController {
  @operation({
    summary: "Get Fks",
  })
  @get()
  static getFks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fks",
  })
  @post("{id}")
  static createFks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
