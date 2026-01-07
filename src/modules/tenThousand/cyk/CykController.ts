import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyk")
export default class CykController {
  @operation({
    summary: "Get Cyk",
  })
  @get()
  static getCyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyk",
  })
  @post("{id}")
  static createCyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
