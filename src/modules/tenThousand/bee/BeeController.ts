import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bees")
export default class BeeController {
  @operation({
    summary: "Get Bees",
  })
  @get()
  static getBees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bee",
  })
  @post("{id}")
  static createBee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
