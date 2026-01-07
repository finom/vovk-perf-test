import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fve")
export default class FveController {
  @operation({
    summary: "Get Fve",
  })
  @get()
  static getFve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fve",
  })
  @post("{id}")
  static createFve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
