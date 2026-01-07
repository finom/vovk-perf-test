import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hue")
export default class HueController {
  @operation({
    summary: "Get Hue",
  })
  @get()
  static getHue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hue",
  })
  @post("{id}")
  static createHue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
