import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghk")
export default class GhkController {
  @operation({
    summary: "Get Ghk",
  })
  @get()
  static getGhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghk",
  })
  @post("{id}")
  static createGhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
