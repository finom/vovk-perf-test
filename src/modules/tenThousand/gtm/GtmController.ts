import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtm")
export default class GtmController {
  @operation({
    summary: "Get Gtm",
  })
  @get()
  static getGtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtm",
  })
  @post("{id}")
  static createGtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
