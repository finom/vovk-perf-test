import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebl")
export default class EblController {
  @operation({
    summary: "Get Ebl",
  })
  @get()
  static getEbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebl",
  })
  @post("{id}")
  static createEbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
