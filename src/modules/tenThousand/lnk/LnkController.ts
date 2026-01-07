import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnk")
export default class LnkController {
  @operation({
    summary: "Get Lnk",
  })
  @get()
  static getLnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnk",
  })
  @post("{id}")
  static createLnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
