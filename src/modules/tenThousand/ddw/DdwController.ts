import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddw")
export default class DdwController {
  @operation({
    summary: "Get Ddw",
  })
  @get()
  static getDdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddw",
  })
  @post("{id}")
  static createDdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
