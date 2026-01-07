import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cx")
export default class CxController {
  @operation({
    summary: "Get Cx",
  })
  @get()
  static getCx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cx",
  })
  @post("{id}")
  static createCx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
