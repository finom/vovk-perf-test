import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cius")
export default class CiuController {
  @operation({
    summary: "Get Cius",
  })
  @get()
  static getCius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciu",
  })
  @post("{id}")
  static createCiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
