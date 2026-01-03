import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkns")
export default class FknController {
  @operation({
    summary: "Get Fkns",
  })
  @get()
  static getFkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkn",
  })
  @post("{id}")
  static createFkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
