import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eww")
export default class EwwController {
  @operation({
    summary: "Get Eww",
  })
  @get()
  static getEww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eww",
  })
  @post("{id}")
  static createEww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
