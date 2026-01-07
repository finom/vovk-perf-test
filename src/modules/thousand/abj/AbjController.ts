import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abj")
export default class AbjController {
  @operation({
    summary: "Get Abj",
  })
  @get()
  static getAbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abj",
  })
  @post("{id}")
  static createAbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
