import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foe")
export default class FoeController {
  @operation({
    summary: "Get Foe",
  })
  @get()
  static getFoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foe",
  })
  @post("{id}")
  static createFoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
