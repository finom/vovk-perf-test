import { procedure, prefix, get, post, operation } from "vovk";

@prefix("do")
export default class DoController {
  @operation({
    summary: "Get Do",
  })
  @get()
  static getDo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Do",
  })
  @post("{id}")
  static createDo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
