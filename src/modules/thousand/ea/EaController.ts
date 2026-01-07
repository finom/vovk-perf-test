import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ea")
export default class EaController {
  @operation({
    summary: "Get Ea",
  })
  @get()
  static getEa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ea",
  })
  @post("{id}")
  static createEa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
