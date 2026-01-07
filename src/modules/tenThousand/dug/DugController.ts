import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dug")
export default class DugController {
  @operation({
    summary: "Get Dug",
  })
  @get()
  static getDug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dug",
  })
  @post("{id}")
  static createDug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
