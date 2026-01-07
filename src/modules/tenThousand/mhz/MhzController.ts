import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhz")
export default class MhzController {
  @operation({
    summary: "Get Mhz",
  })
  @get()
  static getMhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhz",
  })
  @post("{id}")
  static createMhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
