import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgt")
export default class FgtController {
  @operation({
    summary: "Get Fgt",
  })
  @get()
  static getFgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgt",
  })
  @post("{id}")
  static createFgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
