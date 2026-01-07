import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pt")
export default class PtController {
  @operation({
    summary: "Get Pt",
  })
  @get()
  static getPt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pt",
  })
  @post("{id}")
  static createPt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
