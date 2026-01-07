import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cco")
export default class CcoController {
  @operation({
    summary: "Get Cco",
  })
  @get()
  static getCco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cco",
  })
  @post("{id}")
  static createCco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
