import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iro")
export default class IroController {
  @operation({
    summary: "Get Iro",
  })
  @get()
  static getIro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iro",
  })
  @post("{id}")
  static createIro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
