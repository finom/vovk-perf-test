import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fus")
export default class FusController {
  @operation({
    summary: "Get Fus",
  })
  @get()
  static getFus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fus",
  })
  @post("{id}")
  static createFus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
