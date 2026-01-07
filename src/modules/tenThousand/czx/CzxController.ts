import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czx")
export default class CzxController {
  @operation({
    summary: "Get Czx",
  })
  @get()
  static getCzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czx",
  })
  @post("{id}")
  static createCzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
