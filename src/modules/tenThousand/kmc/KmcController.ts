import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmc")
export default class KmcController {
  @operation({
    summary: "Get Kmc",
  })
  @get()
  static getKmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmc",
  })
  @post("{id}")
  static createKmc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
