import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hol")
export default class HolController {
  @operation({
    summary: "Get Hol",
  })
  @get()
  static getHol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hol",
  })
  @post("{id}")
  static createHol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
