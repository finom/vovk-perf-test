import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ews")
export default class EwsController {
  @operation({
    summary: "Get Ews",
  })
  @get()
  static getEws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ews",
  })
  @post("{id}")
  static createEws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
