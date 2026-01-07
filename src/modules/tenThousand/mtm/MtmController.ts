import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtm")
export default class MtmController {
  @operation({
    summary: "Get Mtm",
  })
  @get()
  static getMtm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtm",
  })
  @post("{id}")
  static createMtm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
