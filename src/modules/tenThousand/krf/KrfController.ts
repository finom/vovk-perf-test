import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krfs")
export default class KrfController {
  @operation({
    summary: "Get Krfs",
  })
  @get()
  static getKrfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krf",
  })
  @post("{id}")
  static createKrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
