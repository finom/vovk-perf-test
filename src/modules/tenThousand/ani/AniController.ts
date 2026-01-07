import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ani")
export default class AniController {
  @operation({
    summary: "Get Ani",
  })
  @get()
  static getAni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ani",
  })
  @post("{id}")
  static createAni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
