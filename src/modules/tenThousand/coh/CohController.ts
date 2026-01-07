import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coh")
export default class CohController {
  @operation({
    summary: "Get Coh",
  })
  @get()
  static getCoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coh",
  })
  @post("{id}")
  static createCoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
