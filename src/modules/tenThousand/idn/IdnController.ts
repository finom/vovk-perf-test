import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idn")
export default class IdnController {
  @operation({
    summary: "Get Idn",
  })
  @get()
  static getIdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idn",
  })
  @post("{id}")
  static createIdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
