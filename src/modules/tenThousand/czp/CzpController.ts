import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czp")
export default class CzpController {
  @operation({
    summary: "Get Czp",
  })
  @get()
  static getCzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czp",
  })
  @post("{id}")
  static createCzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
