import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ens")
export default class EnsController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ens",
  })
  @post("{id}")
  static createEns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
