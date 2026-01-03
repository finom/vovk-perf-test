import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyvs")
export default class DyvController {
  @operation({
    summary: "Get Dyvs",
  })
  @get()
  static getDyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyv",
  })
  @post("{id}")
  static createDyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
