import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cez")
export default class CezController {
  @operation({
    summary: "Get Cez",
  })
  @get()
  static getCez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cez",
  })
  @post("{id}")
  static createCez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
