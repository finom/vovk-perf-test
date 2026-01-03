import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fils")
export default class FilController {
  @operation({
    summary: "Get Fils",
  })
  @get()
  static getFils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fil",
  })
  @post("{id}")
  static createFil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
