import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtc")
export default class DtcController {
  @operation({
    summary: "Get Dtc",
  })
  @get()
  static getDtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtc",
  })
  @post("{id}")
  static createDtc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
