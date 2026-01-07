import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpo")
export default class LpoController {
  @operation({
    summary: "Get Lpo",
  })
  @get()
  static getLpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpo",
  })
  @post("{id}")
  static createLpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
