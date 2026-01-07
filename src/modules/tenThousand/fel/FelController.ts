import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fel")
export default class FelController {
  @operation({
    summary: "Get Fel",
  })
  @get()
  static getFel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fel",
  })
  @post("{id}")
  static createFel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
