import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtd")
export default class DtdController {
  @operation({
    summary: "Get Dtd",
  })
  @get()
  static getDtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtd",
  })
  @post("{id}")
  static createDtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
