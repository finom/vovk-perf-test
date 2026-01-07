import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvm")
export default class FvmController {
  @operation({
    summary: "Get Fvm",
  })
  @get()
  static getFvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvm",
  })
  @post("{id}")
  static createFvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
