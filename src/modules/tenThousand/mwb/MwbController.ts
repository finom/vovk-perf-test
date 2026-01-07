import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwb")
export default class MwbController {
  @operation({
    summary: "Get Mwb",
  })
  @get()
  static getMwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwb",
  })
  @post("{id}")
  static createMwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
