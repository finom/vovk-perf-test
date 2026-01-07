import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flz")
export default class FlzController {
  @operation({
    summary: "Get Flz",
  })
  @get()
  static getFlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flz",
  })
  @post("{id}")
  static createFlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
