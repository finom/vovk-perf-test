import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghz")
export default class GhzController {
  @operation({
    summary: "Get Ghz",
  })
  @get()
  static getGhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghz",
  })
  @post("{id}")
  static createGhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
