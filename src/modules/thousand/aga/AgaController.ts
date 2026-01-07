import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aga")
export default class AgaController {
  @operation({
    summary: "Get Aga",
  })
  @get()
  static getAga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aga",
  })
  @post("{id}")
  static createAga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
