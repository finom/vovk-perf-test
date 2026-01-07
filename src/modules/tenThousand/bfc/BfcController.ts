import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfc")
export default class BfcController {
  @operation({
    summary: "Get Bfc",
  })
  @get()
  static getBfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfc",
  })
  @post("{id}")
  static createBfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
