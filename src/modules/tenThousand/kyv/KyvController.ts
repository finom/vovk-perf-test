import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyvs")
export default class KyvController {
  @operation({
    summary: "Get Kyvs",
  })
  @get()
  static getKyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyv",
  })
  @post("{id}")
  static createKyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
