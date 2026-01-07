import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvy")
export default class HvyController {
  @operation({
    summary: "Get Hvy",
  })
  @get()
  static getHvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvy",
  })
  @post("{id}")
  static createHvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
