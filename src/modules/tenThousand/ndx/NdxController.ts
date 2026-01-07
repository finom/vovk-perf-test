import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndx")
export default class NdxController {
  @operation({
    summary: "Get Ndx",
  })
  @get()
  static getNdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndx",
  })
  @post("{id}")
  static createNdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
