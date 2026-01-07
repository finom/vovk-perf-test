import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfo")
export default class LfoController {
  @operation({
    summary: "Get Lfo",
  })
  @get()
  static getLfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfo",
  })
  @post("{id}")
  static createLfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
