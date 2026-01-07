import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgt")
export default class CgtController {
  @operation({
    summary: "Get Cgt",
  })
  @get()
  static getCgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgt",
  })
  @post("{id}")
  static createCgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
