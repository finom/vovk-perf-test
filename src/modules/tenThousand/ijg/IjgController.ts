import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijg")
export default class IjgController {
  @operation({
    summary: "Get Ijg",
  })
  @get()
  static getIjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijg",
  })
  @post("{id}")
  static createIjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
