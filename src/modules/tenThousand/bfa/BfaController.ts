import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfa")
export default class BfaController {
  @operation({
    summary: "Get Bfa",
  })
  @get()
  static getBfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfa",
  })
  @post("{id}")
  static createBfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
