import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efa")
export default class EfaController {
  @operation({
    summary: "Get Efa",
  })
  @get()
  static getEfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efa",
  })
  @post("{id}")
  static createEfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
