import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ina")
export default class InaController {
  @operation({
    summary: "Get Ina",
  })
  @get()
  static getIna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ina",
  })
  @post("{id}")
  static createIna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
