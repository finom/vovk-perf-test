import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyp")
export default class GypController {
  @operation({
    summary: "Get Gyp",
  })
  @get()
  static getGyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyp",
  })
  @post("{id}")
  static createGyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
