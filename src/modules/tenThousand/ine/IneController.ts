import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ines")
export default class IneController {
  @operation({
    summary: "Get Ines",
  })
  @get()
  static getInes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ine",
  })
  @post("{id}")
  static createIne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
