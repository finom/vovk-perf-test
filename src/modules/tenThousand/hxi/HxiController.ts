import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxi")
export default class HxiController {
  @operation({
    summary: "Get Hxi",
  })
  @get()
  static getHxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxi",
  })
  @post("{id}")
  static createHxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
