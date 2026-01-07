import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdn")
export default class BdnController {
  @operation({
    summary: "Get Bdn",
  })
  @get()
  static getBdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdn",
  })
  @post("{id}")
  static createBdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
