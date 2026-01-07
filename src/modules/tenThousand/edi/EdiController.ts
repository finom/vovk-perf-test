import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edi")
export default class EdiController {
  @operation({
    summary: "Get Edi",
  })
  @get()
  static getEdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edi",
  })
  @post("{id}")
  static createEdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
