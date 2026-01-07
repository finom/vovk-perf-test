import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtm")
export default class DtmController {
  @operation({
    summary: "Get Dtm",
  })
  @get()
  static getDtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtm",
  })
  @post("{id}")
  static createDtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
