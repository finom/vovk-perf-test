import { procedure, prefix, get, post, operation } from "vovk";

@prefix("df")
export default class DfController {
  @operation({
    summary: "Get Df",
  })
  @get()
  static getDf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Df",
  })
  @post("{id}")
  static createDf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
