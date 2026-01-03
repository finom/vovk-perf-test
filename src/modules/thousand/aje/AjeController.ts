import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajes")
export default class AjeController {
  @operation({
    summary: "Get Ajes",
  })
  @get()
  static getAjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aje",
  })
  @post("{id}")
  static createAje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
