import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ux")
export default class UxController {
  @operation({
    summary: "Get Ux",
  })
  @get()
  static getUx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ux",
  })
  @post("{id}")
  static createUx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
