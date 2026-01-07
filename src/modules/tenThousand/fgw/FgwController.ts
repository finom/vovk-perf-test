import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgw")
export default class FgwController {
  @operation({
    summary: "Get Fgw",
  })
  @get()
  static getFgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgw",
  })
  @post("{id}")
  static createFgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
