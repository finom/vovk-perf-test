import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxk")
export default class CxkController {
  @operation({
    summary: "Get Cxk",
  })
  @get()
  static getCxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxk",
  })
  @post("{id}")
  static createCxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
