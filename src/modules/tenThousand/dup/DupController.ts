import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dup")
export default class DupController {
  @operation({
    summary: "Get Dup",
  })
  @get()
  static getDup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dup",
  })
  @post("{id}")
  static createDup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
