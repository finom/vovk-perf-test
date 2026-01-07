import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxj")
export default class HxjController {
  @operation({
    summary: "Get Hxj",
  })
  @get()
  static getHxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxj",
  })
  @post("{id}")
  static createHxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
