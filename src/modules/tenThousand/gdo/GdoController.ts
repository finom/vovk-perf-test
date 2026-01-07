import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdo")
export default class GdoController {
  @operation({
    summary: "Get Gdo",
  })
  @get()
  static getGdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdo",
  })
  @post("{id}")
  static createGdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
