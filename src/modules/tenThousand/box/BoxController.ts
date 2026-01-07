import { procedure, prefix, get, post, operation } from "vovk";

@prefix("box")
export default class BoxController {
  @operation({
    summary: "Get Box",
  })
  @get()
  static getBox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Box",
  })
  @post("{id}")
  static createBox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
