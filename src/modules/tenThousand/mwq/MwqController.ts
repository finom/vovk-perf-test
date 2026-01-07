import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwq")
export default class MwqController {
  @operation({
    summary: "Get Mwq",
  })
  @get()
  static getMwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwq",
  })
  @post("{id}")
  static createMwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
