import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbe")
export default class HbeController {
  @operation({
    summary: "Get Hbe",
  })
  @get()
  static getHbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbe",
  })
  @post("{id}")
  static createHbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
