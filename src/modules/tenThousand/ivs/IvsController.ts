import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivs")
export default class IvsController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivs",
  })
  @post("{id}")
  static createIvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
