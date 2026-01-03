import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klas")
export default class KlaController {
  @operation({
    summary: "Get Klas",
  })
  @get()
  static getKlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kla",
  })
  @post("{id}")
  static createKla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
