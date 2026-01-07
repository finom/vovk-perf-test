import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpo")
export default class HpoController {
  @operation({
    summary: "Get Hpo",
  })
  @get()
  static getHpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpo",
  })
  @post("{id}")
  static createHpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
