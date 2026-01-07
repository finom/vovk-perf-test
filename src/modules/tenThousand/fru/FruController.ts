import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fru")
export default class FruController {
  @operation({
    summary: "Get Fru",
  })
  @get()
  static getFru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fru",
  })
  @post("{id}")
  static createFru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
