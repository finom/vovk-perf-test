import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czgs")
export default class CzgController {
  @operation({
    summary: "Get Czgs",
  })
  @get()
  static getCzgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czg",
  })
  @post("{id}")
  static createCzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
