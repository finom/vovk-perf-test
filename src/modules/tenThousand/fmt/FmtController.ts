import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmt")
export default class FmtController {
  @operation({
    summary: "Get Fmt",
  })
  @get()
  static getFmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmt",
  })
  @post("{id}")
  static createFmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
