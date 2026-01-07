import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbn")
export default class HbnController {
  @operation({
    summary: "Get Hbn",
  })
  @get()
  static getHbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbn",
  })
  @post("{id}")
  static createHbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
