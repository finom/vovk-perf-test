import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aph")
export default class AphController {
  @operation({
    summary: "Get Aph",
  })
  @get()
  static getAph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aph",
  })
  @post("{id}")
  static createAph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
