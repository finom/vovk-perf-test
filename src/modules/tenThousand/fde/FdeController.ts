import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdes")
export default class FdeController {
  @operation({
    summary: "Get Fdes",
  })
  @get()
  static getFdes = procedure({
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
