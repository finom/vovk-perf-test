import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lga")
export default class LgaController {
  @operation({
    summary: "Get Lga",
  })
  @get()
  static getLga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lga",
  })
  @post("{id}")
  static createLga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
