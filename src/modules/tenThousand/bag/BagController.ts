import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bags")
export default class BagController {
  @operation({
    summary: "Get Bags",
  })
  @get()
  static getBags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bag",
  })
  @post("{id}")
  static createBag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
