import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cih")
export default class CihController {
  @operation({
    summary: "Get Cih",
  })
  @get()
  static getCih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cih",
  })
  @post("{id}")
  static createCih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
