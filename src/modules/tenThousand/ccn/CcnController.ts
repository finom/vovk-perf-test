import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccn")
export default class CcnController {
  @operation({
    summary: "Get Ccn",
  })
  @get()
  static getCcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccn",
  })
  @post("{id}")
  static createCcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
