import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkks")
export default class FkkController {
  @operation({
    summary: "Get Fkks",
  })
  @get()
  static getFkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkk",
  })
  @post("{id}")
  static createFkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
