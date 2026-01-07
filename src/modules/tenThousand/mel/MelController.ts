import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mel")
export default class MelController {
  @operation({
    summary: "Get Mel",
  })
  @get()
  static getMel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mel",
  })
  @post("{id}")
  static createMel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
