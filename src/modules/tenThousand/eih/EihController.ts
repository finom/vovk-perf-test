import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eih")
export default class EihController {
  @operation({
    summary: "Get Eih",
  })
  @get()
  static getEih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eih",
  })
  @post("{id}")
  static createEih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
