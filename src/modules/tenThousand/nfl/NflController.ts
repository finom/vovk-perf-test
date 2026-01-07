import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfl")
export default class NflController {
  @operation({
    summary: "Get Nfl",
  })
  @get()
  static getNfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfl",
  })
  @post("{id}")
  static createNfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
