import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccc")
export default class CccController {
  @operation({
    summary: "Get Ccc",
  })
  @get()
  static getCcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccc",
  })
  @post("{id}")
  static createCcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
