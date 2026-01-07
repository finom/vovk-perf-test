import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvm")
export default class MvmController {
  @operation({
    summary: "Get Mvm",
  })
  @get()
  static getMvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvm",
  })
  @post("{id}")
  static createMvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
