import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzis")
export default class LziController {
  @operation({
    summary: "Get Lzis",
  })
  @get()
  static getLzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzi",
  })
  @post("{id}")
  static createLzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
