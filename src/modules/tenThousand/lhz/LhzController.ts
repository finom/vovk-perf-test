import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhz")
export default class LhzController {
  @operation({
    summary: "Get Lhz",
  })
  @get()
  static getLhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhz",
  })
  @post("{id}")
  static createLhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
