import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iab")
export default class IabController {
  @operation({
    summary: "Get Iab",
  })
  @get()
  static getIab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iab",
  })
  @post("{id}")
  static createIab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
