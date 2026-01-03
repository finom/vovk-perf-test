import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czfs")
export default class CzfController {
  @operation({
    summary: "Get Czfs",
  })
  @get()
  static getCzfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czf",
  })
  @post("{id}")
  static createCzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
