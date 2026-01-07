import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byu")
export default class ByuController {
  @operation({
    summary: "Get Byu",
  })
  @get()
  static getByu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byu",
  })
  @post("{id}")
  static createByu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
