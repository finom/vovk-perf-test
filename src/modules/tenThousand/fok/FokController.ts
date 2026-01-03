import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foks")
export default class FokController {
  @operation({
    summary: "Get Foks",
  })
  @get()
  static getFoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fok",
  })
  @post("{id}")
  static createFok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
