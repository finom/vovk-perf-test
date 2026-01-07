import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bag")
export default class BagController {
  @operation({
    summary: "Get Bag",
  })
  @get()
  static getBag = procedure({
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
