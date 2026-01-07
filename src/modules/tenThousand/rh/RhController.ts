import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rh")
export default class RhController {
  @operation({
    summary: "Get Rh",
  })
  @get()
  static getRh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rh",
  })
  @post("{id}")
  static createRh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
