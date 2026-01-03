import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anes")
export default class AneController {
  @operation({
    summary: "Get Anes",
  })
  @get()
  static getAnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ane",
  })
  @post("{id}")
  static createAne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
