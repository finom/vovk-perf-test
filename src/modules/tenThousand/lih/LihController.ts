import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lih")
export default class LihController {
  @operation({
    summary: "Get Lih",
  })
  @get()
  static getLih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lih",
  })
  @post("{id}")
  static createLih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
