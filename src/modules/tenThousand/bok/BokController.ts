import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boks")
export default class BokController {
  @operation({
    summary: "Get Boks",
  })
  @get()
  static getBoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bok",
  })
  @post("{id}")
  static createBok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
