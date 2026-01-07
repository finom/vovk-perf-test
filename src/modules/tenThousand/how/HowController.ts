import { procedure, prefix, get, post, operation } from "vovk";

@prefix("how")
export default class HowController {
  @operation({
    summary: "Get How",
  })
  @get()
  static getHow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create How",
  })
  @post("{id}")
  static createHow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
