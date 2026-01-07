import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijz")
export default class IjzController {
  @operation({
    summary: "Get Ijz",
  })
  @get()
  static getIjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijz",
  })
  @post("{id}")
  static createIjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
