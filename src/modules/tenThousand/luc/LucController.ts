import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lucs")
export default class LucController {
  @operation({
    summary: "Get Lucs",
  })
  @get()
  static getLucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luc",
  })
  @post("{id}")
  static createLuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
