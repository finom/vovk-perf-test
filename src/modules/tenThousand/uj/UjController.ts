import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uj")
export default class UjController {
  @operation({
    summary: "Get Uj",
  })
  @get()
  static getUj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uj",
  })
  @post("{id}")
  static createUj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
