import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cls")
export default class ClController {
  @operation({
    summary: "Get Cls",
  })
  @get()
  static getCls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cl",
  })
  @post("{id}")
  static createCl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
