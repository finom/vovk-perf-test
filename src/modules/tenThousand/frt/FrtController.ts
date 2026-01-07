import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frt")
export default class FrtController {
  @operation({
    summary: "Get Frt",
  })
  @get()
  static getFrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frt",
  })
  @post("{id}")
  static createFrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
