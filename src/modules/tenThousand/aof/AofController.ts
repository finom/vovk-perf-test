import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aofs")
export default class AofController {
  @operation({
    summary: "Get Aofs",
  })
  @get()
  static getAofs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aof",
  })
  @post("{id}")
  static createAof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
