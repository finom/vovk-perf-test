import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajas")
export default class AjaController {
  @operation({
    summary: "Get Ajas",
  })
  @get()
  static getAjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aja",
  })
  @post("{id}")
  static createAja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
