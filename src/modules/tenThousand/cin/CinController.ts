import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cin")
export default class CinController {
  @operation({
    summary: "Get Cin",
  })
  @get()
  static getCin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cin",
  })
  @post("{id}")
  static createCin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
