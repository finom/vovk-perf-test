import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bas")
export default class BasController {
  @operation({
    summary: "Get Bas",
  })
  @get()
  static getBas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bas",
  })
  @post("{id}")
  static createBas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
