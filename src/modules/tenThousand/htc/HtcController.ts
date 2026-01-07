import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htc")
export default class HtcController {
  @operation({
    summary: "Get Htc",
  })
  @get()
  static getHtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htc",
  })
  @post("{id}")
  static createHtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
