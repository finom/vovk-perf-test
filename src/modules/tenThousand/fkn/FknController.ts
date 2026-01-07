import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkn")
export default class FknController {
  @operation({
    summary: "Get Fkn",
  })
  @get()
  static getFkn = procedure({
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
