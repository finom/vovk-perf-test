import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdn")
export default class FdnController {
  @operation({
    summary: "Get Fdn",
  })
  @get()
  static getFdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdn",
  })
  @post("{id}")
  static createFdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
