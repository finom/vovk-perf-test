import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsb")
export default class HsbController {
  @operation({
    summary: "Get Hsb",
  })
  @get()
  static getHsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsb",
  })
  @post("{id}")
  static createHsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
