import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bafs")
export default class BafController {
  @operation({
    summary: "Get Bafs",
  })
  @get()
  static getBafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baf",
  })
  @post("{id}")
  static createBaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
