import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aus")
export default class AuController {
  @operation({
    summary: "Get Aus",
  })
  @get()
  static getAus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Au",
  })
  @post("{id}")
  static createAu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
