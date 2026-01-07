import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrv")
export default class LrvController {
  @operation({
    summary: "Get Lrv",
  })
  @get()
  static getLrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrv",
  })
  @post("{id}")
  static createLrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
