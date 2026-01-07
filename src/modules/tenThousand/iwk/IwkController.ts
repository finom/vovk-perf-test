import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwk")
export default class IwkController {
  @operation({
    summary: "Get Iwk",
  })
  @get()
  static getIwk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwk",
  })
  @post("{id}")
  static createIwk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
