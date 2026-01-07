import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikk")
export default class IkkController {
  @operation({
    summary: "Get Ikk",
  })
  @get()
  static getIkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikk",
  })
  @post("{id}")
  static createIkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
