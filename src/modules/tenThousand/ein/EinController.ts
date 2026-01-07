import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ein")
export default class EinController {
  @operation({
    summary: "Get Ein",
  })
  @get()
  static getEin = procedure({
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
