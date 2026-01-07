import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ire")
export default class IreController {
  @operation({
    summary: "Get Ire",
  })
  @get()
  static getIre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ire",
  })
  @post("{id}")
  static createIre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
