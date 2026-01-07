import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftr")
export default class FtrController {
  @operation({
    summary: "Get Ftr",
  })
  @get()
  static getFtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftr",
  })
  @post("{id}")
  static createFtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
