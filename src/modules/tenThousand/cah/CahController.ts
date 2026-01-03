import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cahs")
export default class CahController {
  @operation({
    summary: "Get Cahs",
  })
  @get()
  static getCahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cah",
  })
  @post("{id}")
  static createCah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
