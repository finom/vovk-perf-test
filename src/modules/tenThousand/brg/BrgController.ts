import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brg")
export default class BrgController {
  @operation({
    summary: "Get Brg",
  })
  @get()
  static getBrg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brg",
  })
  @post("{id}")
  static createBrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
