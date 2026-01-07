import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewq")
export default class EwqController {
  @operation({
    summary: "Get Ewq",
  })
  @get()
  static getEwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewq",
  })
  @post("{id}")
  static createEwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
