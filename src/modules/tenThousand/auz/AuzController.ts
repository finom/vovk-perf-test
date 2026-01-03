import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auzs")
export default class AuzController {
  @operation({
    summary: "Get Auzs",
  })
  @get()
  static getAuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auz",
  })
  @post("{id}")
  static createAuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
