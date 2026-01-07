import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aih")
export default class AihController {
  @operation({
    summary: "Get Aih",
  })
  @get()
  static getAih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aih",
  })
  @post("{id}")
  static createAih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
