import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtf")
export default class DtfController {
  @operation({
    summary: "Get Dtf",
  })
  @get()
  static getDtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtf",
  })
  @post("{id}")
  static createDtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
