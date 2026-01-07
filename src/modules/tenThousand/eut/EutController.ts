import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eut")
export default class EutController {
  @operation({
    summary: "Get Eut",
  })
  @get()
  static getEut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eut",
  })
  @post("{id}")
  static createEut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
