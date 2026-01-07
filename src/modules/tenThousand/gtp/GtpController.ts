import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtp")
export default class GtpController {
  @operation({
    summary: "Get Gtp",
  })
  @get()
  static getGtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtp",
  })
  @post("{id}")
  static createGtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
