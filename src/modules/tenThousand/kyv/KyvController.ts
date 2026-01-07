import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyv")
export default class KyvController {
  @operation({
    summary: "Get Kyv",
  })
  @get()
  static getKyv = procedure({
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
