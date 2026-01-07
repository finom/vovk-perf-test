import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edr")
export default class EdrController {
  @operation({
    summary: "Get Edr",
  })
  @get()
  static getEdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edr",
  })
  @post("{id}")
  static createEdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
