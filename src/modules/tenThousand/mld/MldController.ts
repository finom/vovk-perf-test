import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mld")
export default class MldController {
  @operation({
    summary: "Get Mld",
  })
  @get()
  static getMld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mld",
  })
  @post("{id}")
  static createMld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
