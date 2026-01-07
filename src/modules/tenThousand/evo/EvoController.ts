import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evo")
export default class EvoController {
  @operation({
    summary: "Get Evo",
  })
  @get()
  static getEvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evo",
  })
  @post("{id}")
  static createEvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
