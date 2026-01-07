import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fga")
export default class FgaController {
  @operation({
    summary: "Get Fga",
  })
  @get()
  static getFga = procedure({
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
