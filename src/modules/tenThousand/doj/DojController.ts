import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doj")
export default class DojController {
  @operation({
    summary: "Get Doj",
  })
  @get()
  static getDoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doj",
  })
  @post("{id}")
  static createDoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
