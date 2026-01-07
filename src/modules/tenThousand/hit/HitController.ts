import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hit")
export default class HitController {
  @operation({
    summary: "Get Hit",
  })
  @get()
  static getHit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hit",
  })
  @post("{id}")
  static createHit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
