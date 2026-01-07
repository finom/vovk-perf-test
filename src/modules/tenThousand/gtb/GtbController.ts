import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtb")
export default class GtbController {
  @operation({
    summary: "Get Gtb",
  })
  @get()
  static getGtb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtb",
  })
  @post("{id}")
  static createGtb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
