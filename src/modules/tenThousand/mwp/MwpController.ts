import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwp")
export default class MwpController {
  @operation({
    summary: "Get Mwp",
  })
  @get()
  static getMwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwp",
  })
  @post("{id}")
  static createMwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
