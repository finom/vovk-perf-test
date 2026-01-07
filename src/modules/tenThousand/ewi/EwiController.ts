import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewi")
export default class EwiController {
  @operation({
    summary: "Get Ewi",
  })
  @get()
  static getEwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewi",
  })
  @post("{id}")
  static createEwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
