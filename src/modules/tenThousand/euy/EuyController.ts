import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euy")
export default class EuyController {
  @operation({
    summary: "Get Euy",
  })
  @get()
  static getEuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euy",
  })
  @post("{id}")
  static createEuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
