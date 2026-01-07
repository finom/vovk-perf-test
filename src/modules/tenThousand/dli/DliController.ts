import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dli")
export default class DliController {
  @operation({
    summary: "Get Dli",
  })
  @get()
  static getDli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dli",
  })
  @post("{id}")
  static createDli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
