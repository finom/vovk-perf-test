import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtq")
export default class GtqController {
  @operation({
    summary: "Get Gtq",
  })
  @get()
  static getGtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtq",
  })
  @post("{id}")
  static createGtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
