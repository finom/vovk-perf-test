import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uz")
export default class UzController {
  @operation({
    summary: "Get Uz",
  })
  @get()
  static getUz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uz",
  })
  @post("{id}")
  static createUz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
