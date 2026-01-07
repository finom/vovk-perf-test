import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxr")
export default class JxrController {
  @operation({
    summary: "Get Jxr",
  })
  @get()
  static getJxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxr",
  })
  @post("{id}")
  static createJxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
