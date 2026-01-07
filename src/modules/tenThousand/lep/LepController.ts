import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lep")
export default class LepController {
  @operation({
    summary: "Get Lep",
  })
  @get()
  static getLep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lep",
  })
  @post("{id}")
  static createLep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
