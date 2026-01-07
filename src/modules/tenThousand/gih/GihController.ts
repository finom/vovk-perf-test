import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gih")
export default class GihController {
  @operation({
    summary: "Get Gih",
  })
  @get()
  static getGih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gih",
  })
  @post("{id}")
  static createGih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
