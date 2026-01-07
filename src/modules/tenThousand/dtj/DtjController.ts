import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtj")
export default class DtjController {
  @operation({
    summary: "Get Dtj",
  })
  @get()
  static getDtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtj",
  })
  @post("{id}")
  static createDtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
