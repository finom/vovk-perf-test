import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqt")
export default class GqtController {
  @operation({
    summary: "Get Gqt",
  })
  @get()
  static getGqt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqt",
  })
  @post("{id}")
  static createGqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
