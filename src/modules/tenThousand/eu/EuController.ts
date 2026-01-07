import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eu")
export default class EuController {
  @operation({
    summary: "Get Eu",
  })
  @get()
  static getEu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eu",
  })
  @post("{id}")
  static createEu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
