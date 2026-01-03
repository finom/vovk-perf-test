import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brfs")
export default class BrfController {
  @operation({
    summary: "Get Brfs",
  })
  @get()
  static getBrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brf",
  })
  @post("{id}")
  static createBrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
