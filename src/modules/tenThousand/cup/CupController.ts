import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cup")
export default class CupController {
  @operation({
    summary: "Get Cup",
  })
  @get()
  static getCup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cup",
  })
  @post("{id}")
  static createCup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
