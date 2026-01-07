import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxe")
export default class GxeController {
  @operation({
    summary: "Get Gxe",
  })
  @get()
  static getGxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gxe",
  })
  @post("{id}")
  static createGxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
