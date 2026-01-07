import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfa")
export default class DfaController {
  @operation({
    summary: "Get Dfa",
  })
  @get()
  static getDfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfa",
  })
  @post("{id}")
  static createDfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
