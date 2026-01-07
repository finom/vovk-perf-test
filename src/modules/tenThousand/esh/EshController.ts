import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esh")
export default class EshController {
  @operation({
    summary: "Get Esh",
  })
  @get()
  static getEsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esh",
  })
  @post("{id}")
  static createEsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
