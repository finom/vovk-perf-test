import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ead")
export default class EadController {
  @operation({
    summary: "Get Ead",
  })
  @get()
  static getEad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ead",
  })
  @post("{id}")
  static createEad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
