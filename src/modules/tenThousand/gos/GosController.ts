import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gos")
export default class GosController {
  @operation({
    summary: "Get Gos",
  })
  @get()
  static getGos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gos",
  })
  @post("{id}")
  static createGos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
