import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijr")
export default class IjrController {
  @operation({
    summary: "Get Ijr",
  })
  @get()
  static getIjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijr",
  })
  @post("{id}")
  static createIjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
