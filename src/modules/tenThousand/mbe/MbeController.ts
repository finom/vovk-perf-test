import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbe")
export default class MbeController {
  @operation({
    summary: "Get Mbe",
  })
  @get()
  static getMbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbe",
  })
  @post("{id}")
  static createMbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
