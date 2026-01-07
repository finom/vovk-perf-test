import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adh")
export default class AdhController {
  @operation({
    summary: "Get Adh",
  })
  @get()
  static getAdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adh",
  })
  @post("{id}")
  static createAdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
