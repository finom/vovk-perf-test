import { procedure, prefix, get, post, operation } from "vovk";

@prefix("del")
export default class DelController {
  @operation({
    summary: "Get Del",
  })
  @get()
  static getDel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Del",
  })
  @post("{id}")
  static createDel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
