import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ita")
export default class ItaController {
  @operation({
    summary: "Get Ita",
  })
  @get()
  static getIta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ita",
  })
  @post("{id}")
  static createIta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
