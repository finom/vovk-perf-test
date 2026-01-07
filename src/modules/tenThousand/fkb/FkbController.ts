import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkb")
export default class FkbController {
  @operation({
    summary: "Get Fkb",
  })
  @get()
  static getFkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkb",
  })
  @post("{id}")
  static createFkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
