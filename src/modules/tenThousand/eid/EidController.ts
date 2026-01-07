import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eid")
export default class EidController {
  @operation({
    summary: "Get Eid",
  })
  @get()
  static getEid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eid",
  })
  @post("{id}")
  static createEid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
