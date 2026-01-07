import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxe")
export default class HxeController {
  @operation({
    summary: "Get Hxe",
  })
  @get()
  static getHxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxe",
  })
  @post("{id}")
  static createHxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
