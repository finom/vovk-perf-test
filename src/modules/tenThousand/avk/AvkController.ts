import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avk")
export default class AvkController {
  @operation({
    summary: "Get Avk",
  })
  @get()
  static getAvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avk",
  })
  @post("{id}")
  static createAvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
