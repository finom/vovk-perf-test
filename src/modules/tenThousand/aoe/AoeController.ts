import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoe")
export default class AoeController {
  @operation({
    summary: "Get Aoe",
  })
  @get()
  static getAoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoe",
  })
  @post("{id}")
  static createAoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
