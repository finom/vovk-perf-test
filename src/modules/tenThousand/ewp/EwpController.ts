import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewp")
export default class EwpController {
  @operation({
    summary: "Get Ewp",
  })
  @get()
  static getEwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewp",
  })
  @post("{id}")
  static createEwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
