import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpjs")
export default class JpjController {
  @operation({
    summary: "Get Jpjs",
  })
  @get()
  static getJpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpj",
  })
  @post("{id}")
  static createJpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
