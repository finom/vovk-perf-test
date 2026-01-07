import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyy")
export default class GyyController {
  @operation({
    summary: "Get Gyy",
  })
  @get()
  static getGyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyy",
  })
  @post("{id}")
  static createGyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
