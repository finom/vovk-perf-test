import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewt")
export default class EwtController {
  @operation({
    summary: "Get Ewt",
  })
  @get()
  static getEwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewt",
  })
  @post("{id}")
  static createEwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
