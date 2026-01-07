import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mk")
export default class MkController {
  @operation({
    summary: "Get Mk",
  })
  @get()
  static getMk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mk",
  })
  @post("{id}")
  static createMk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
