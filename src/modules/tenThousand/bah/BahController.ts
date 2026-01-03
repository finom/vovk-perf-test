import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bahs")
export default class BahController {
  @operation({
    summary: "Get Bahs",
  })
  @get()
  static getBahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bah",
  })
  @post("{id}")
  static createBah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
