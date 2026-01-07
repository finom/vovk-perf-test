import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmc")
export default class NmcController {
  @operation({
    summary: "Get Nmc",
  })
  @get()
  static getNmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmc",
  })
  @post("{id}")
  static createNmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
