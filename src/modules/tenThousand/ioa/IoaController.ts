import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioas")
export default class IoaController {
  @operation({
    summary: "Get Ioas",
  })
  @get()
  static getIoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioa",
  })
  @post("{id}")
  static createIoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
