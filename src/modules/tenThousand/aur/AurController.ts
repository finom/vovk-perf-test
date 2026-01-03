import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aurs")
export default class AurController {
  @operation({
    summary: "Get Aurs",
  })
  @get()
  static getAurs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aur",
  })
  @post("{id}")
  static createAur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
