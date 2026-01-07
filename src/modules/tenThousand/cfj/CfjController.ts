import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfj")
export default class CfjController {
  @operation({
    summary: "Get Cfj",
  })
  @get()
  static getCfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfj",
  })
  @post("{id}")
  static createCfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
