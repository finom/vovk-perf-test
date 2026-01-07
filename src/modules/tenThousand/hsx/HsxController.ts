import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsx")
export default class HsxController {
  @operation({
    summary: "Get Hsx",
  })
  @get()
  static getHsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsx",
  })
  @post("{id}")
  static createHsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
