import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daz")
export default class DazController {
  @operation({
    summary: "Get Daz",
  })
  @get()
  static getDaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daz",
  })
  @post("{id}")
  static createDaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
