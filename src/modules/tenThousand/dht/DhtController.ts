import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dht")
export default class DhtController {
  @operation({
    summary: "Get Dht",
  })
  @get()
  static getDht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dht",
  })
  @post("{id}")
  static createDht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
