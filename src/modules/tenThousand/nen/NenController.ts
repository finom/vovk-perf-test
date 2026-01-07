import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nen")
export default class NenController {
  @operation({
    summary: "Get Nen",
  })
  @get()
  static getNen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nen",
  })
  @post("{id}")
  static createNen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
