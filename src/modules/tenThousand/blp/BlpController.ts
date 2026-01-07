import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blp")
export default class BlpController {
  @operation({
    summary: "Get Blp",
  })
  @get()
  static getBlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blp",
  })
  @post("{id}")
  static createBlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
