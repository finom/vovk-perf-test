import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auo")
export default class AuoController {
  @operation({
    summary: "Get Auo",
  })
  @get()
  static getAuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auo",
  })
  @post("{id}")
  static createAuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
