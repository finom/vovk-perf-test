import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fli")
export default class FliController {
  @operation({
    summary: "Get Fli",
  })
  @get()
  static getFli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fli",
  })
  @post("{id}")
  static createFli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
