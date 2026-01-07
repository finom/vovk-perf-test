import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hof")
export default class HofController {
  @operation({
    summary: "Get Hof",
  })
  @get()
  static getHof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hof",
  })
  @post("{id}")
  static createHof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
