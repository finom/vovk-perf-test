import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtz")
export default class MtzController {
  @operation({
    summary: "Get Mtz",
  })
  @get()
  static getMtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtz",
  })
  @post("{id}")
  static createMtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
