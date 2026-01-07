import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dxx")
export default class DxxController {
  @operation({
    summary: "Get Dxx",
  })
  @get()
  static getDxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dxx",
  })
  @post("{id}")
  static createDxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
