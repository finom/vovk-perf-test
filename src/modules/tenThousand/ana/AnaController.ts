import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anas")
export default class AnaController {
  @operation({
    summary: "Get Anas",
  })
  @get()
  static getAnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ana",
  })
  @post("{id}")
  static createAna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
