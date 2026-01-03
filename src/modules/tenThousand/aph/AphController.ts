import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aphs")
export default class AphController {
  @operation({
    summary: "Get Aphs",
  })
  @get()
  static getAphs = procedure({
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
