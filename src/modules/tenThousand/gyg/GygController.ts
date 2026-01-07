import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyg")
export default class GygController {
  @operation({
    summary: "Get Gyg",
  })
  @get()
  static getGyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyg",
  })
  @post("{id}")
  static createGyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
