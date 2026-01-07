import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoa")
export default class AoaController {
  @operation({
    summary: "Get Aoa",
  })
  @get()
  static getAoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoa",
  })
  @post("{id}")
  static createAoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
