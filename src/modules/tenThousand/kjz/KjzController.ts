import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjz")
export default class KjzController {
  @operation({
    summary: "Get Kjz",
  })
  @get()
  static getKjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjz",
  })
  @post("{id}")
  static createKjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
