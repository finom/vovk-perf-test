import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cip")
export default class CipController {
  @operation({
    summary: "Get Cip",
  })
  @get()
  static getCip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cip",
  })
  @post("{id}")
  static createCip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
