import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdes")
export default class CdeController {
  @operation({
    summary: "Get Cdes",
  })
  @get()
  static getCdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cde",
  })
  @post("{id}")
  static createCde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
