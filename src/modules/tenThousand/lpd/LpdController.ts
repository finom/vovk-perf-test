import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpd")
export default class LpdController {
  @operation({
    summary: "Get Lpd",
  })
  @get()
  static getLpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpd",
  })
  @post("{id}")
  static createLpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
