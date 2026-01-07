import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewv")
export default class EwvController {
  @operation({
    summary: "Get Ewv",
  })
  @get()
  static getEwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewv",
  })
  @post("{id}")
  static createEwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
