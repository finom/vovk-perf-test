import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agies")
export default class AgyController {
  @operation({
    summary: "Get Agies",
  })
  @get()
  static getAgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agy",
  })
  @post("{id}")
  static createAgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
