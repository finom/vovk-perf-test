import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kio")
export default class KioController {
  @operation({
    summary: "Get Kio",
  })
  @get()
  static getKio = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kio",
  })
  @post("{id}")
  static createKio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
