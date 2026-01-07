import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcc")
export default class KccController {
  @operation({
    summary: "Get Kcc",
  })
  @get()
  static getKcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcc",
  })
  @post("{id}")
  static createKcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
