import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pus")
export default class PuController {
  @operation({
    summary: "Get Pus",
  })
  @get()
  static getPus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pu",
  })
  @post("{id}")
  static createPu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
