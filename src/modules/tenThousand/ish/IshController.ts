import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ish")
export default class IshController {
  @operation({
    summary: "Get Ish",
  })
  @get()
  static getIsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ish",
  })
  @post("{id}")
  static createIsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
