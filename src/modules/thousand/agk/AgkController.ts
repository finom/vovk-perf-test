import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agk")
export default class AgkController {
  @operation({
    summary: "Get Agk",
  })
  @get()
  static getAgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agk",
  })
  @post("{id}")
  static createAgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
