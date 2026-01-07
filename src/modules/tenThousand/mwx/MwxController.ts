import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwx")
export default class MwxController {
  @operation({
    summary: "Get Mwx",
  })
  @get()
  static getMwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwx",
  })
  @post("{id}")
  static createMwx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
