import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ut")
export default class UtController {
  @operation({
    summary: "Get Ut",
  })
  @get()
  static getUt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ut",
  })
  @post("{id}")
  static createUt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
