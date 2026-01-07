import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duh")
export default class DuhController {
  @operation({
    summary: "Get Duh",
  })
  @get()
  static getDuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duh",
  })
  @post("{id}")
  static createDuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
