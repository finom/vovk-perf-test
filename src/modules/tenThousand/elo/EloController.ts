import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elo")
export default class EloController {
  @operation({
    summary: "Get Elo",
  })
  @get()
  static getElo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elo",
  })
  @post("{id}")
  static createElo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
