import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agb")
export default class AgbController {
  @operation({
    summary: "Get Agb",
  })
  @get()
  static getAgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agb",
  })
  @post("{id}")
  static createAgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
