import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfc")
export default class LfcController {
  @operation({
    summary: "Get Lfc",
  })
  @get()
  static getLfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfc",
  })
  @post("{id}")
  static createLfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
