import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aczs")
export default class AczController {
  @operation({
    summary: "Get Aczs",
  })
  @get()
  static getAczs = procedure({
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
