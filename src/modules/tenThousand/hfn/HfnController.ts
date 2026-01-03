import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfns")
export default class HfnController {
  @operation({
    summary: "Get Hfns",
  })
  @get()
  static getHfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfn",
  })
  @post("{id}")
  static createHfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
