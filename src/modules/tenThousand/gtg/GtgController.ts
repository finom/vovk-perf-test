import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtg")
export default class GtgController {
  @operation({
    summary: "Get Gtg",
  })
  @get()
  static getGtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtg",
  })
  @post("{id}")
  static createGtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
