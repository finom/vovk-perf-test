import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxu")
export default class HxuController {
  @operation({
    summary: "Get Hxu",
  })
  @get()
  static getHxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxu",
  })
  @post("{id}")
  static createHxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
