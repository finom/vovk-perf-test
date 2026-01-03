import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsis")
export default class BsiController {
  @operation({
    summary: "Get Bsis",
  })
  @get()
  static getBsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsi",
  })
  @post("{id}")
  static createBsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
