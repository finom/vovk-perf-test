import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghm")
export default class GhmController {
  @operation({
    summary: "Get Ghm",
  })
  @get()
  static getGhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghm",
  })
  @post("{id}")
  static createGhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
