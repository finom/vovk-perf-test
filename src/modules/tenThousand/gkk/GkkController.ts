import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkk")
export default class GkkController {
  @operation({
    summary: "Get Gkk",
  })
  @get()
  static getGkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkk",
  })
  @post("{id}")
  static createGkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
