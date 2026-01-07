import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lva")
export default class LvaController {
  @operation({
    summary: "Get Lva",
  })
  @get()
  static getLva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lva",
  })
  @post("{id}")
  static createLva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
