import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgas")
export default class LgaController {
  @operation({
    summary: "Get Lgas",
  })
  @get()
  static getLgas = procedure({
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
