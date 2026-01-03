import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anus")
export default class AnuController {
  @operation({
    summary: "Get Anus",
  })
  @get()
  static getAnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anu",
  })
  @post("{id}")
  static createAnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
