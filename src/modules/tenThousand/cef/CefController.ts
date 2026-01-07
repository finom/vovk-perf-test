import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cef")
export default class CefController {
  @operation({
    summary: "Get Cef",
  })
  @get()
  static getCef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cef",
  })
  @post("{id}")
  static createCef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
