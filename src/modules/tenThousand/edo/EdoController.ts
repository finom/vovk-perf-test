import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edo")
export default class EdoController {
  @operation({
    summary: "Get Edo",
  })
  @get()
  static getEdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edo",
  })
  @post("{id}")
  static createEdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
