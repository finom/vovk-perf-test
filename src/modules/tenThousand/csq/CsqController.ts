import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csq")
export default class CsqController {
  @operation({
    summary: "Get Csq",
  })
  @get()
  static getCsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csq",
  })
  @post("{id}")
  static createCsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
