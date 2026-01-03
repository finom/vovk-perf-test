import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blms")
export default class BlmController {
  @operation({
    summary: "Get Blms",
  })
  @get()
  static getBlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blm",
  })
  @post("{id}")
  static createBlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
