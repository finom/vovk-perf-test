import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecl")
export default class EclController {
  @operation({
    summary: "Get Ecl",
  })
  @get()
  static getEcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecl",
  })
  @post("{id}")
  static createEcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
