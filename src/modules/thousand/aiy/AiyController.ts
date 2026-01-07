import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiy")
export default class AiyController {
  @operation({
    summary: "Get Aiy",
  })
  @get()
  static getAiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiy",
  })
  @post("{id}")
  static createAiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
