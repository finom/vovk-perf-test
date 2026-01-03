import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gafs")
export default class GafController {
  @operation({
    summary: "Get Gafs",
  })
  @get()
  static getGafs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gaf",
  })
  @post("{id}")
  static createGaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
