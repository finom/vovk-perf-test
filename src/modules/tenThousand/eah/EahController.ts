import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eahs")
export default class EahController {
  @operation({
    summary: "Get Eahs",
  })
  @get()
  static getEahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eah",
  })
  @post("{id}")
  static createEah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
