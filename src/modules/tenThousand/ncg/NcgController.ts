import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncg")
export default class NcgController {
  @operation({
    summary: "Get Ncg",
  })
  @get()
  static getNcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncg",
  })
  @post("{id}")
  static createNcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
