import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrx")
export default class LrxController {
  @operation({
    summary: "Get Lrx",
  })
  @get()
  static getLrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrx",
  })
  @post("{id}")
  static createLrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
