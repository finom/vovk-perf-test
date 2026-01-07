import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkg")
export default class KkgController {
  @operation({
    summary: "Get Kkg",
  })
  @get()
  static getKkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkg",
  })
  @post("{id}")
  static createKkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
