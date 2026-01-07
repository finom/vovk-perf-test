import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frb")
export default class FrbController {
  @operation({
    summary: "Get Frb",
  })
  @get()
  static getFrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frb",
  })
  @post("{id}")
  static createFrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
