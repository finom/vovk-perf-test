import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etj")
export default class EtjController {
  @operation({
    summary: "Get Etj",
  })
  @get()
  static getEtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etj",
  })
  @post("{id}")
  static createEtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
