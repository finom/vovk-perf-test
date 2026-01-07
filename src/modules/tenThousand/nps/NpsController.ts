import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nps")
export default class NpsController {
  @operation({
    summary: "Get Nps",
  })
  @get()
  static getNps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nps",
  })
  @post("{id}")
  static createNps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
