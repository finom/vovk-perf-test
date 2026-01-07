import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ais")
export default class AisController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ais",
  })
  @post("{id}")
  static createAis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
