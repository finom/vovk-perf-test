import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnn")
export default class FnnController {
  @operation({
    summary: "Get Fnn",
  })
  @get()
  static getFnn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnn",
  })
  @post("{id}")
  static createFnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
