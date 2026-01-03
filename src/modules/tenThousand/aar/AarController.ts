import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aars")
export default class AarController {
  @operation({
    summary: "Get Aars",
  })
  @get()
  static getAars = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aar",
  })
  @post("{id}")
  static createAar = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
