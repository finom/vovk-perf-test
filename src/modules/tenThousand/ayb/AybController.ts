import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aybs")
export default class AybController {
  @operation({
    summary: "Get Aybs",
  })
  @get()
  static getAybs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayb",
  })
  @post("{id}")
  static createAyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
