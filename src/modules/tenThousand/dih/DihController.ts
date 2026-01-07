import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dih")
export default class DihController {
  @operation({
    summary: "Get Dih",
  })
  @get()
  static getDih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dih",
  })
  @post("{id}")
  static createDih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
