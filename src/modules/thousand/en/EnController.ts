import { procedure, prefix, get, post, operation } from "vovk";

@prefix("en")
export default class EnController {
  @operation({
    summary: "Get En",
  })
  @get()
  static getEn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create En",
  })
  @post("{id}")
  static createEn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
