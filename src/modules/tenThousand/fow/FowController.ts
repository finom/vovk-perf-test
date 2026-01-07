import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fow")
export default class FowController {
  @operation({
    summary: "Get Fow",
  })
  @get()
  static getFow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fow",
  })
  @post("{id}")
  static createFow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
