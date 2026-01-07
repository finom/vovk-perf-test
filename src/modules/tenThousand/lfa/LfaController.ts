import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfa")
export default class LfaController {
  @operation({
    summary: "Get Lfa",
  })
  @get()
  static getLfa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfa",
  })
  @post("{id}")
  static createLfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
