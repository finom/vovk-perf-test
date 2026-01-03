import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juhs")
export default class JuhController {
  @operation({
    summary: "Get Juhs",
  })
  @get()
  static getJuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Juh",
  })
  @post("{id}")
  static createJuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
