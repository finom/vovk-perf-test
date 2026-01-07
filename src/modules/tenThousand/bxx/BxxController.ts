import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxx")
export default class BxxController {
  @operation({
    summary: "Get Bxx",
  })
  @get()
  static getBxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxx",
  })
  @post("{id}")
  static createBxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
