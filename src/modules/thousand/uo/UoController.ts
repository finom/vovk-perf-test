import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uos")
export default class UoController {
  @operation({
    summary: "Get Uos",
  })
  @get()
  static getUos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uo",
  })
  @post("{id}")
  static createUo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
