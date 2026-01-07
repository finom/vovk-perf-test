import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aul")
export default class AulController {
  @operation({
    summary: "Get Aul",
  })
  @get()
  static getAul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aul",
  })
  @post("{id}")
  static createAul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
