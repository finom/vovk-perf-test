import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czk")
export default class CzkController {
  @operation({
    summary: "Get Czk",
  })
  @get()
  static getCzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czk",
  })
  @post("{id}")
  static createCzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
