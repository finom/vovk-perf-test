import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aur")
export default class AurController {
  @operation({
    summary: "Get Aur",
  })
  @get()
  static getAur = procedure({
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
