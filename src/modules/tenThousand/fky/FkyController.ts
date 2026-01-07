import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fky")
export default class FkyController {
  @operation({
    summary: "Get Fky",
  })
  @get()
  static getFky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fky",
  })
  @post("{id}")
  static createFky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
