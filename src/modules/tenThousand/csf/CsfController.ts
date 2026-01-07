import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csf")
export default class CsfController {
  @operation({
    summary: "Get Csf",
  })
  @get()
  static getCsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csf",
  })
  @post("{id}")
  static createCsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
