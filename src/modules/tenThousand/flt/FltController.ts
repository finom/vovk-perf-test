import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flt")
export default class FltController {
  @operation({
    summary: "Get Flt",
  })
  @get()
  static getFlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flt",
  })
  @post("{id}")
  static createFlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
