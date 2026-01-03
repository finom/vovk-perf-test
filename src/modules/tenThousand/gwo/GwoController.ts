import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwos")
export default class GwoController {
  @operation({
    summary: "Get Gwos",
  })
  @get()
  static getGwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwo",
  })
  @post("{id}")
  static createGwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
