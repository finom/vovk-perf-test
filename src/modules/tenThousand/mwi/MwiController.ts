import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwi")
export default class MwiController {
  @operation({
    summary: "Get Mwi",
  })
  @get()
  static getMwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwi",
  })
  @post("{id}")
  static createMwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
