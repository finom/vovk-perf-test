import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cme")
export default class CmeController {
  @operation({
    summary: "Get Cme",
  })
  @get()
  static getCme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cme",
  })
  @post("{id}")
  static createCme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
