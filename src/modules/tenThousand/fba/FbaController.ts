import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fba")
export default class FbaController {
  @operation({
    summary: "Get Fba",
  })
  @get()
  static getFba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fba",
  })
  @post("{id}")
  static createFba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
