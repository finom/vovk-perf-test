import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrf")
export default class LrfController {
  @operation({
    summary: "Get Lrf",
  })
  @get()
  static getLrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrf",
  })
  @post("{id}")
  static createLrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
