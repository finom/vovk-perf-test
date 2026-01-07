import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsx")
export default class JsxController {
  @operation({
    summary: "Get Jsx",
  })
  @get()
  static getJsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsx",
  })
  @post("{id}")
  static createJsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
