import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dse")
export default class DseController {
  @operation({
    summary: "Get Dse",
  })
  @get()
  static getDse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dse",
  })
  @post("{id}")
  static createDse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
