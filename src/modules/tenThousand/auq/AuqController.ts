import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auq")
export default class AuqController {
  @operation({
    summary: "Get Auq",
  })
  @get()
  static getAuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auq",
  })
  @post("{id}")
  static createAuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
