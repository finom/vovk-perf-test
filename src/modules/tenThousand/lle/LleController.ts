import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lle")
export default class LleController {
  @operation({
    summary: "Get Lle",
  })
  @get()
  static getLle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lle",
  })
  @post("{id}")
  static createLle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
