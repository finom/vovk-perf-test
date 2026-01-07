import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lux")
export default class LuxController {
  @operation({
    summary: "Get Lux",
  })
  @get()
  static getLux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lux",
  })
  @post("{id}")
  static createLux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
