import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngh")
export default class NghController {
  @operation({
    summary: "Get Ngh",
  })
  @get()
  static getNgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngh",
  })
  @post("{id}")
  static createNgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
