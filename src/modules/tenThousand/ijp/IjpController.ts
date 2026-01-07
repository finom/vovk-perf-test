import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijp")
export default class IjpController {
  @operation({
    summary: "Get Ijp",
  })
  @get()
  static getIjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijp",
  })
  @post("{id}")
  static createIjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
