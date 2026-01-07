import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewz")
export default class EwzController {
  @operation({
    summary: "Get Ewz",
  })
  @get()
  static getEwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewz",
  })
  @post("{id}")
  static createEwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
