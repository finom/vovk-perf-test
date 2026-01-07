import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebc")
export default class EbcController {
  @operation({
    summary: "Get Ebc",
  })
  @get()
  static getEbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebc",
  })
  @post("{id}")
  static createEbc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
