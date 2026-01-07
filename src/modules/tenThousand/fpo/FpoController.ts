import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpo")
export default class FpoController {
  @operation({
    summary: "Get Fpo",
  })
  @get()
  static getFpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpo",
  })
  @post("{id}")
  static createFpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
