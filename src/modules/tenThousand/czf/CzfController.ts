import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czf")
export default class CzfController {
  @operation({
    summary: "Get Czf",
  })
  @get()
  static getCzf = procedure({
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
