import { procedure, prefix, get, post, operation } from "vovk";

@prefix("civ")
export default class CivController {
  @operation({
    summary: "Get Civ",
  })
  @get()
  static getCiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Civ",
  })
  @post("{id}")
  static createCiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
