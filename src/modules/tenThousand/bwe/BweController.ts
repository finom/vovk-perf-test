import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwe")
export default class BweController {
  @operation({
    summary: "Get Bwe",
  })
  @get()
  static getBwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwe",
  })
  @post("{id}")
  static createBwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
