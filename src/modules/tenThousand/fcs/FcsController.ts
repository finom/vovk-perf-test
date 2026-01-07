import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcs")
export default class FcsController {
  @operation({
    summary: "Get Fcs",
  })
  @get()
  static getFcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcs",
  })
  @post("{id}")
  static createFcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
