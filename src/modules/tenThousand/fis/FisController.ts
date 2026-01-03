import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fis")
export default class FisController {
  @operation({
    summary: "Get Fis",
  })
  @get()
  static getFis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fis",
  })
  @post("{id}")
  static createFis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
