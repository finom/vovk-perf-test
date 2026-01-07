import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsv")
export default class HsvController {
  @operation({
    summary: "Get Hsv",
  })
  @get()
  static getHsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsv",
  })
  @post("{id}")
  static createHsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
