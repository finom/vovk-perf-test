import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nba")
export default class NbaController {
  @operation({
    summary: "Get Nba",
  })
  @get()
  static getNba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nba",
  })
  @post("{id}")
  static createNba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
