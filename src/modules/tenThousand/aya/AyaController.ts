import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aya")
export default class AyaController {
  @operation({
    summary: "Get Aya",
  })
  @get()
  static getAya = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aya",
  })
  @post("{id}")
  static createAya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
