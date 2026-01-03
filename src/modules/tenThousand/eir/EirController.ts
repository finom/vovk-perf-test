import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eirs")
export default class EirController {
  @operation({
    summary: "Get Eirs",
  })
  @get()
  static getEirs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eir",
  })
  @post("{id}")
  static createEir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
