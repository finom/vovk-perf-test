import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gre")
export default class GreController {
  @operation({
    summary: "Get Gre",
  })
  @get()
  static getGre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gre",
  })
  @post("{id}")
  static createGre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
