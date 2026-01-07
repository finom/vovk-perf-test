import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dht")
export default class DhtController {
  @operation({
    summary: "Get Dht",
  })
  @get()
  static getDht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dht",
  })
  @post("{id}")
  static createDht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
