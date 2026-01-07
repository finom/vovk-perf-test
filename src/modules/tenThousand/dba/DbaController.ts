import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dba")
export default class DbaController {
  @operation({
    summary: "Get Dba",
  })
  @get()
  static getDba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dba",
  })
  @post("{id}")
  static createDba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
