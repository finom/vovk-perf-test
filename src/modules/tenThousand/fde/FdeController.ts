import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fde")
export default class FdeController {
  @operation({
    summary: "Get Fde",
  })
  @get()
  static getFde = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fde",
  })
  @post("{id}")
  static createFde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
