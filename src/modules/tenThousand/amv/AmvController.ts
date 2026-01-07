import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amv")
export default class AmvController {
  @operation({
    summary: "Get Amv",
  })
  @get()
  static getAmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amv",
  })
  @post("{id}")
  static createAmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
