import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjk")
export default class GjkController {
  @operation({
    summary: "Get Gjk",
  })
  @get()
  static getGjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjk",
  })
  @post("{id}")
  static createGjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
