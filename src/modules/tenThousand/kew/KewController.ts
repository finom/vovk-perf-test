import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kew")
export default class KewController {
  @operation({
    summary: "Get Kew",
  })
  @get()
  static getKew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kew",
  })
  @post("{id}")
  static createKew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
