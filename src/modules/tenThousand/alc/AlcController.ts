import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alcs")
export default class AlcController {
  @operation({
    summary: "Get Alcs",
  })
  @get()
  static getAlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alc",
  })
  @post("{id}")
  static createAlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
