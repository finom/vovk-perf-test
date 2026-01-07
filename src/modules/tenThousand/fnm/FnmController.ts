import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnm")
export default class FnmController {
  @operation({
    summary: "Get Fnm",
  })
  @get()
  static getFnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnm",
  })
  @post("{id}")
  static createFnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
