import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aar")
export default class AarController {
  @operation({
    summary: "Get Aar",
  })
  @get()
  static getAar = procedure({
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
