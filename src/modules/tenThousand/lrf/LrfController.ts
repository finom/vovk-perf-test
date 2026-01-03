import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrfs")
export default class LrfController {
  @operation({
    summary: "Get Lrfs",
  })
  @get()
  static getLrfs = procedure({
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
