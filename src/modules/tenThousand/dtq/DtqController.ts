import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtq")
export default class DtqController {
  @operation({
    summary: "Get Dtq",
  })
  @get()
  static getDtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtq",
  })
  @post("{id}")
  static createDtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
