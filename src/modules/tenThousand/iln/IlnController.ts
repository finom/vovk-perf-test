import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iln")
export default class IlnController {
  @operation({
    summary: "Get Iln",
  })
  @get()
  static getIln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iln",
  })
  @post("{id}")
  static createIln = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
