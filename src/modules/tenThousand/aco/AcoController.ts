import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aco")
export default class AcoController {
  @operation({
    summary: "Get Aco",
  })
  @get()
  static getAco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aco",
  })
  @post("{id}")
  static createAco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
