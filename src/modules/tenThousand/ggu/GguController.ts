import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggus")
export default class GguController {
  @operation({
    summary: "Get Ggus",
  })
  @get()
  static getGgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggu",
  })
  @post("{id}")
  static createGgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
