import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dso")
export default class DsoController {
  @operation({
    summary: "Get Dso",
  })
  @get()
  static getDso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dso",
  })
  @post("{id}")
  static createDso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
