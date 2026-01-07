import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcy")
export default class DcyController {
  @operation({
    summary: "Get Dcy",
  })
  @get()
  static getDcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcy",
  })
  @post("{id}")
  static createDcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
