import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtw")
export default class GtwController {
  @operation({
    summary: "Get Gtw",
  })
  @get()
  static getGtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtw",
  })
  @post("{id}")
  static createGtw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
