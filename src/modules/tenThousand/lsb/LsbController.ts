import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsb")
export default class LsbController {
  @operation({
    summary: "Get Lsb",
  })
  @get()
  static getLsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsb",
  })
  @post("{id}")
  static createLsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
