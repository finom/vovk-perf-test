import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drs")
export default class DrsController {
  @operation({
    summary: "Get Drs",
  })
  @get()
  static getDrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drs",
  })
  @post("{id}")
  static createDrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
