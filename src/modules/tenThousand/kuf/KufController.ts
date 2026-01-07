import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuf")
export default class KufController {
  @operation({
    summary: "Get Kuf",
  })
  @get()
  static getKuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuf",
  })
  @post("{id}")
  static createKuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
