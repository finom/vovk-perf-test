import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpo")
export default class CpoController {
  @operation({
    summary: "Get Cpo",
  })
  @get()
  static getCpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpo",
  })
  @post("{id}")
  static createCpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
