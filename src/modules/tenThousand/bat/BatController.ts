import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bats")
export default class BatController {
  @operation({
    summary: "Get Bats",
  })
  @get()
  static getBats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bat",
  })
  @post("{id}")
  static createBat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
