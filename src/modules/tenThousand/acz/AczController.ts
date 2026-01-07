import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acz")
export default class AczController {
  @operation({
    summary: "Get Acz",
  })
  @get()
  static getAcz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acz",
  })
  @post("{id}")
  static createAcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
