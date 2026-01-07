import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axi")
export default class AxiController {
  @operation({
    summary: "Get Axi",
  })
  @get()
  static getAxi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axi",
  })
  @post("{id}")
  static createAxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
