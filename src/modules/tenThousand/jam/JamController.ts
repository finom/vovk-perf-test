import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jam")
export default class JamController {
  @operation({
    summary: "Get Jam",
  })
  @get()
  static getJam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jam",
  })
  @post("{id}")
  static createJam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
