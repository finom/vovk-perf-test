import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdr")
export default class CdrController {
  @operation({
    summary: "Get Cdr",
  })
  @get()
  static getCdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdr",
  })
  @post("{id}")
  static createCdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
