import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bys")
export default class BysController {
  @operation({
    summary: "Get Bys",
  })
  @get()
  static getBys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bys",
  })
  @post("{id}")
  static createBys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
