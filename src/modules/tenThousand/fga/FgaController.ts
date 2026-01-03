import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgas")
export default class FgaController {
  @operation({
    summary: "Get Fgas",
  })
  @get()
  static getFgas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fga",
  })
  @post("{id}")
  static createFga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
