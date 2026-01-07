import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkm")
export default class FkmController {
  @operation({
    summary: "Get Fkm",
  })
  @get()
  static getFkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkm",
  })
  @post("{id}")
  static createFkm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
