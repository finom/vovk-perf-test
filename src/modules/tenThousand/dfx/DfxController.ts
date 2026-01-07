import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfx")
export default class DfxController {
  @operation({
    summary: "Get Dfx",
  })
  @get()
  static getDfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfx",
  })
  @post("{id}")
  static createDfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
