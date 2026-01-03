import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhts")
export default class DhtController {
  @operation({
    summary: "Get Dhts",
  })
  @get()
  static getDhts = procedure({
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
