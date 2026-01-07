import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ato")
export default class AtoController {
  @operation({
    summary: "Get Ato",
  })
  @get()
  static getAto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ato",
  })
  @post("{id}")
  static createAto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
