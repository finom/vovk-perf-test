import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jse")
export default class JseController {
  @operation({
    summary: "Get Jse",
  })
  @get()
  static getJse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jse",
  })
  @post("{id}")
  static createJse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
