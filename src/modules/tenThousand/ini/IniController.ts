import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ini")
export default class IniController {
  @operation({
    summary: "Get Ini",
  })
  @get()
  static getIni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ini",
  })
  @post("{id}")
  static createIni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
