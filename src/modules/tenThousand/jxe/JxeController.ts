import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxe")
export default class JxeController {
  @operation({
    summary: "Get Jxe",
  })
  @get()
  static getJxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxe",
  })
  @post("{id}")
  static createJxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
