import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsos")
export default class LsoController {
  @operation({
    summary: "Get Lsos",
  })
  @get()
  static getLsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lso",
  })
  @post("{id}")
  static createLso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
