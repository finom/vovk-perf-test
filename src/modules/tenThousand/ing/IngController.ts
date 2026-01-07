import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ing")
export default class IngController {
  @operation({
    summary: "Get Ing",
  })
  @get()
  static getIng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ing",
  })
  @post("{id}")
  static createIng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
