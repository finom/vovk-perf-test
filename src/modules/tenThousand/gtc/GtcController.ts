import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtc")
export default class GtcController {
  @operation({
    summary: "Get Gtc",
  })
  @get()
  static getGtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtc",
  })
  @post("{id}")
  static createGtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
