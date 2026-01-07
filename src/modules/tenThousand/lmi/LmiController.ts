import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmi")
export default class LmiController {
  @operation({
    summary: "Get Lmi",
  })
  @get()
  static getLmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmi",
  })
  @post("{id}")
  static createLmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
