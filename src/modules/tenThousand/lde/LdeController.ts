import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldes")
export default class LdeController {
  @operation({
    summary: "Get Ldes",
  })
  @get()
  static getLdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lde",
  })
  @post("{id}")
  static createLde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
