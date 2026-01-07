import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bde")
export default class BdeController {
  @operation({
    summary: "Get Bde",
  })
  @get()
  static getBde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bde",
  })
  @post("{id}")
  static createBde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
