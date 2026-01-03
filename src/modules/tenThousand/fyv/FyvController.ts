import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyvs")
export default class FyvController {
  @operation({
    summary: "Get Fyvs",
  })
  @get()
  static getFyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyv",
  })
  @post("{id}")
  static createFyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
