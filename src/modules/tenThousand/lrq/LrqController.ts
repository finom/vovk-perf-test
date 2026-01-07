import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrq")
export default class LrqController {
  @operation({
    summary: "Get Lrq",
  })
  @get()
  static getLrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrq",
  })
  @post("{id}")
  static createLrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
