import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acd")
export default class AcdController {
  @operation({
    summary: "Get Acd",
  })
  @get()
  static getAcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acd",
  })
  @post("{id}")
  static createAcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
