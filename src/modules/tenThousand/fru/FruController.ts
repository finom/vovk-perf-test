import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frus")
export default class FruController {
  @operation({
    summary: "Get Frus",
  })
  @get()
  static getFrus = procedure({
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
