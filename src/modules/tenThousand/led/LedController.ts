import { procedure, prefix, get, post, operation } from "vovk";

@prefix("led")
export default class LedController {
  @operation({
    summary: "Get Led",
  })
  @get()
  static getLed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Led",
  })
  @post("{id}")
  static createLed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
