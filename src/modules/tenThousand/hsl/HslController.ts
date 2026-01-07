import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsl")
export default class HslController {
  @operation({
    summary: "Get Hsl",
  })
  @get()
  static getHsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsl",
  })
  @post("{id}")
  static createHsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
