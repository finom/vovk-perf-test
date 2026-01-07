import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtg")
export default class DtgController {
  @operation({
    summary: "Get Dtg",
  })
  @get()
  static getDtg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtg",
  })
  @post("{id}")
  static createDtg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
