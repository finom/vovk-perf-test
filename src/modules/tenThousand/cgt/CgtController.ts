import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgts")
export default class CgtController {
  @operation({
    summary: "Get Cgts",
  })
  @get()
  static getCgts = procedure({
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
