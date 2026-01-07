import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jox")
export default class JoxController {
  @operation({
    summary: "Get Jox",
  })
  @get()
  static getJox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jox",
  })
  @post("{id}")
  static createJox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
