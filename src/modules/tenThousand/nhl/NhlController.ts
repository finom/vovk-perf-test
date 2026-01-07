import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhl")
export default class NhlController {
  @operation({
    summary: "Get Nhl",
  })
  @get()
  static getNhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhl",
  })
  @post("{id}")
  static createNhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
