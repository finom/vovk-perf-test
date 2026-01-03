import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eins")
export default class EinController {
  @operation({
    summary: "Get Eins",
  })
  @get()
  static getEins = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ein",
  })
  @post("{id}")
  static createEin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
