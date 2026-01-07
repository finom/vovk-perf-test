import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ido")
export default class IdoController {
  @operation({
    summary: "Get Ido",
  })
  @get()
  static getIdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ido",
  })
  @post("{id}")
  static createIdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
