import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcd")
export default class HcdController {
  @operation({
    summary: "Get Hcd",
  })
  @get()
  static getHcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcd",
  })
  @post("{id}")
  static createHcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
