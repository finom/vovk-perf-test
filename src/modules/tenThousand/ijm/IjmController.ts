import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijm")
export default class IjmController {
  @operation({
    summary: "Get Ijm",
  })
  @get()
  static getIjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijm",
  })
  @post("{id}")
  static createIjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
