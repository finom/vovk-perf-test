import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blm")
export default class BlmController {
  @operation({
    summary: "Get Blm",
  })
  @get()
  static getBlm = procedure({
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
