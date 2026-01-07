import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kba")
export default class KbaController {
  @operation({
    summary: "Get Kba",
  })
  @get()
  static getKba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kba",
  })
  @post("{id}")
  static createKba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
