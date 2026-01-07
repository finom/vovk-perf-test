import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aea")
export default class AeaController {
  @operation({
    summary: "Get Aea",
  })
  @get()
  static getAea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aea",
  })
  @post("{id}")
  static createAea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
