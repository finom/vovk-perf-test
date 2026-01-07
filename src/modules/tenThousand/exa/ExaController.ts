import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exa")
export default class ExaController {
  @operation({
    summary: "Get Exa",
  })
  @get()
  static getExa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exa",
  })
  @post("{id}")
  static createExa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
