import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bih")
export default class BihController {
  @operation({
    summary: "Get Bih",
  })
  @get()
  static getBih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bih",
  })
  @post("{id}")
  static createBih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
