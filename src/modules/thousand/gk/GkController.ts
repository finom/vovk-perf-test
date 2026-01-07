import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gk")
export default class GkController {
  @operation({
    summary: "Get Gk",
  })
  @get()
  static getGk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gk",
  })
  @post("{id}")
  static createGk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
