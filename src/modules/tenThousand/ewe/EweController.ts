import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewe")
export default class EweController {
  @operation({
    summary: "Get Ewe",
  })
  @get()
  static getEwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewe",
  })
  @post("{id}")
  static createEwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
